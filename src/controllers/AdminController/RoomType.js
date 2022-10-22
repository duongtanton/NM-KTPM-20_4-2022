const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const AdminController = {
  async index(req, res, next) {
    const data = await db.sequelize.models.types.findAll()
    let types = []
    for(let i in data){
      console.log(data[i].dataValues);
      types.push(data[i].dataValues)
    }
    res.render("./admin/room-type", {
      types: types,
      layout: "admin"
    });
  },
  async create(req, res, next) {
    const newt = {
      name: req.body.name,
      bedNumber: parseInt(req.body.bedNumber),
      roomNumber: parseInt(req.body.roomNumber),
      price: parseFloat(req.body.price)}
    const newType = await db.sequelize.models.types.create(newt)
    console.log(newt);
    console.log(newType);
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
