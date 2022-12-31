const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const { Hotels } = db;
const UsersController = {
  async index(req, res, next) {
    const hotels = await Hotels.findAll({}).then(r => r.map(i => i.toJSON())) || []
    const hotelsPage = [];
    while (hotels.length > 0) {
      hotelsPage.push(hotels.splice(0, 4));
    }

    res.render("./users/home", Response(res, 1, "", { hotelsPage }))
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
