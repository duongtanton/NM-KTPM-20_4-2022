const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const UsersController = {
  async index(req, res, next) {
    console.log("aaaaa");
    res.render("./users/home", Response(res))
  },
  async create(req, res, next) {
    res.send("create");
  },
  async store(req, res, next) {
    res.send("store");
  },
  async show(req, res, next) {
    res.send("show");
  },
  async edit(req, res, next) {
    res.send("edit");
  },
  async update(req, res, next) {
    res.send("update");
  },
  async destroy(req, res, next) {
    res.send("destroy");
  },
};
module.exports = UsersController;
