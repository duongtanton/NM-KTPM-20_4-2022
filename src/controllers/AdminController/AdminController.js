const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const statistic = require("../../db/queries/statistic.js");

const AdminController = {
  async index(req, res, next) {
    const totalRevenues = await statistic.totalRevenues();
    const totalBookings = await statistic.totalBookings();
    const totalCheck_ins = await statistic.totalCheck_ins();
    const totalUsers = await statistic.totalUsers();
    const hotels = await statistic.topHotels();

    res.render("./admin/home", Response(res, 1, null, {
      totalRevenues,
      totalBookings,
      totalCheck_ins,
      totalUsers,
      hotels,
    }));
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
module.exports = AdminController;
