const { Model } = require("sequelize");
const db = require("../db/models/index.js");
const { CONSTANT, ROLES } = require("../common/index.js");
const bcrypt = require("../util/bcrypt.js");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const LogInOut = {
  async index(req, res, next) {
    res.render("./users/login");
  },

  async create(req, res, next) {
    const { Users } = db;
    const { username, password, repassword } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (user != null) {
      res.render("./users/login", { data: { message: "Username already exist", code: 0 } })
    } else if (repassword != password) {
      res.render("./users/login", { data: { message: "Password and retype not match", code: 0 } })
    } else {
      const user = await Users.create({ username, password }).then(result => result.toJSON?.());
      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
      res.cookie("auth", token);
      res.render("./users/login", { data: { message: "Success", code: 1, user } })
    }
  },

  async store(req, res, next) {
    const { Users, Users_Roles, Roles } = db;
    const { username, password, keep } = req.body;
    const user = await Users.findOne({ where: { username }, raw: true });
    if (user == null) {
      res.render("./users/login", { data: { message: "Username not match", code: 0 } })
    } else if (!bcrypt.compare(password, user.password)) {
      res.render("./users/login", { data: { message: "Password not match", code: 0 } })
    } else {
      if (!!keep) {
        res.cookie("username", username);
      } else {
        res.clearCookie("username");
      }
      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
      res.cookie("auth", token);

      const { id } = user;
      const user_role = await Users_Roles.findAll({ id, include: Roles }).then(result => result.map(ur => ur.toJSON()))
      const roleAdmin = user_role.some(ur => (ur?.Role?.code == ROLES.AMDIN || ur?.Role?.code === ROLES.STAFF));
      if (roleAdmin) {
        res.redirect("/admin");
      } else {
        res.redirect("/");
      }
    }
  },

  async destroy(req, res, next) {
    res.clearCookie("auth");
    res.redirect("/login");
  },
};
module.exports = LogInOut;
