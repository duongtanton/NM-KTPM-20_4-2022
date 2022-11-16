const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");

const { Room_Types } = db;

const AdminController = {
  async index(req, res, next) {
    const data = await Room_Types.findAll({
      raw: true
    })
    console.log(data);
    res.render("./admin/rooms-type", Response(res, 1, null, { types: data }));
  },
  async create(req, res, next) {
    const newt = {
      name: req.body.name,
      bedNumber: parseInt(req.body.bedNumber),
      roomNumber: parseInt(req.body.roomNumber),
      price: parseFloat(req.body.price)
    }
    const newType = await Room_Types.create(newt)
    res.redirect('back');
  },
  async store(req, res, next) {
    res.send("store");
  },
  async show(req, res, next) {
    const id = req.params.id;
    const data = await Room_Types.findOne({ where: { id: id } })
    console.log(data);
    res.status(200).json(data.dataValues);
  },
  async showAll(req, res, next) {
    const data = await Room_Types.findAll({
      raw: true
    })
    res.status(200).json(data);
  },
  async edit(req, res, next) {
    const id = req.params.id;
    const newdata = req.body;

    const data = await Room_Types.update(newdata, { where: { id: id } })
    res.redirect('back');
  },
  async update(req, res, next) {
    res.send("update");
  },
  async destroy(req, res, next) {
    const id = req.params.id;
    const rs = await Room_Types.destroy({ where: { id: id } });
    res.redirect('back');
  },
};
module.exports = AdminController;
