const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
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
    const { Users } = db;
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username }, raw: true });
    console.log(user)
    if (user == null) {
      res.render("./users/login", { data: { message: "Username not match", code: 0 } })
    } else if (!bcrypt.compare(password, user.password)) {
      res.render("./users/login", { data: { message: "Password not match", code: 0 } })
    } else {
      res.render("./users/login", { data: { message: "Login sucess", code: 1 } })
    }
  },

  async show(req, res, next) {
    res.send("show");
  },

  async edit(req, res, next) {
    res.send("edit");
  },

  async update(req, res, next) {
    console.log(req)
    res.send("update");
  },

  async destroy(req, res, next) {
    res.send("destroy");
  },
};
module.exports = LogInOut;  
