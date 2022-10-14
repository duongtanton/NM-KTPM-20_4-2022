const { Model } = require("sequelize");
const db = require("../db/models/index.js");
const { CONSTANT, ROLES, Response, Message, MESSAGE } = require("../common/index.js");
const { bcrypt, crypto } = require("../util");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const LogInOut = {
  async index(req, res, next) {
    res.render("./login", Response(res));
  },

  async create(req, res, next) {
    const { Users, Users_Roles, Roles, Enterprises } = db;
    const { username, password, repassword, enterprise } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (user != null) {
      res.render("./login", Response(res, 0, Message(MESSAGE.ERROR, "Username already exist"), null));
    } else if (repassword != password) {
      res.render("./login", Response(res, 0, Message(MESSAGE.ERROR, "Password and retype not match"), null));
    } else {
      let _enterprise = null;
      let role = null;
      if (!!enterprise) {
        _enterprise = await Enterprises.create({
          code: crypto.randomString(),
        }).then(result => result?.toJSON());
        role = await Roles.findOne({ where: { code: ROLES.ENTERPRISE } }).then(result => result?.toJSON());
      } else {
        role = await Roles.findOne({ where: { code: ROLES.USER } }).then(result => result?.toJSON());
      }
      const user = await Users.create({
        username,
        password,
        enterpriseId: _enterprise?.id
      }).then(result => result?.toJSON());
      await Users_Roles.create({
        userId: user.id,
        roleId: role.id,
      });
      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
      res.cookie("auth", token);
      res.render("./login", Response(res, 1, Message(MESSAGE.SUCCESS, "Register successfully. Please login!!!"), null));
    }
  },

  async store(req, res, next) {
    const { Users, Users_Roles, Roles } = db;
    const { username, password, keep } = req.body;
    const user = await Users.findOne({ where: { username }, raw: true });
    if (!!keep) {
      res.cookie("username", username);
    } else {
      res.clearCookie("username");
    }
    if (user == null) {
      res.render("./login", Response(res, 0, Message(MESSAGE.ERROR, "Username not match"), null));
    } else if (!bcrypt.compare(password, user.password)) {
      res.render("./login", Response(res, 0, Message(MESSAGE.ERROR, "Password not match"), null));
    } else {
      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
      res.cookie("auth", token);
      const { id } = user;
      const user_role = await Users_Roles.findAll({ where: { userId: id }, include: Roles }).then(result => result.map(ur => ur.toJSON()));
      const roleAdmin = user_role.some(ur => (ur?.Role?.code == ROLES.AMDIN || ur?.Role?.code === ROLES.STAFF || ROLES.ENTERPRISE));
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
