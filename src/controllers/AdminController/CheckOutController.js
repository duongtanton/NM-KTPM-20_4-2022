const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const CheckOutController = {
  async index(req, res, next) {
    res.render("./admin/home", {layout: "admin"});
  },
  async create(req, res, next) {
    res.send("create");
  },
};
module.exports = CheckOutController;
