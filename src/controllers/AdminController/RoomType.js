const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");

const { types } = db;

const AdminController = {
  async index(req, res, next) {
    const data = await types.findAll()
    let type = []
    for(let i in data){
      type.push(data[i].dataValues)
    }
    res.render("./admin/rooms-type", {
      types: type,
      layout: "admin"
    });
  },
  async create(req, res, next) {
    const newt = {
      name: req.body.name,
      bedNumber: parseInt(req.body.bedNumber),
      roomNumber: parseInt(req.body.roomNumber),
      price: parseFloat(req.body.price)}
    const newType = await types.create(newt)
    res.redirect('back');
  },
  async store(req, res, next) {
    res.send("store");
  },
  async show(req, res, next) {
    const id = req.params.id;
    const data = await types.findOne({where:{id : id}})
    console.log(data);
    res.status(200).json(data.dataValues);
  },
  async edit(req, res, next) {
    const id = req.params.id;
    const newdata = req.body;

    const data = await types.update(newdata, {where: {id : id}})
    res.redirect('back');
  },
  async update(req, res, next) {
    res.send("update");
  },
  async destroy(req, res, next) {
    const id = req.params.id;
    const rs = await types.destroy({ where: { id:id } });
    res.redirect('back');
  },
};
module.exports = AdminController;
