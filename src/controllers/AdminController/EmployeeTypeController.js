const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ROLES, Response, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const jwt = require('jsonwebtoken');
const { Employee_Types } = db;

const EmployeeTypeController = {
  async index(req, res, next) {
    try {
      const type = await Employee_Types.findAll({
        raw: true,
      });
      console.log(type);
      res.render("./admin/employee-type/view", Response(res, 1, null, { type }));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async display(req, res, next) {
    try {
      res.render("./admin/employee-type/create");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async create(req, res, next) {
    try {
      const { typeId, typeName } = req.body;
      const type = await Employee_Types.findOne({ where: { typeId: typeId } });

      if (type != null) {
        res.render("./admin/employee-type/create", Response(res, 0, Message(MESSAGE.ERROR, "This employee type already exists!"), null));
      } else {
        const type = await Employee_Types.create({ typeId: typeId, typeName: typeName }).then(result => result?.toJSON());
        res.render("./admin/employee-type/create", Response(res, 1, Message(MESSAGE.SUCCESS, "Create employee type successfully!"), null));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async store(req, res, next) {
    res.render("./admin/employee-type/view");
    res.send("store!!");
  },
  async show(req, res, next) {
    res.send("show");
  },
  async edit(req, res, next) {
    const { id } = req.params;
    const type = await Employee_Types.findOne(
      { where: { id: id } },
      { raw: true }
    ).then(r => r?.toJSON());
    res.render("./admin/employee-type/edit", Response(res, 1, null, { type: type }));
  },
  async update(req, res, next) {
    const { id, typeId, typeName, description} = req.body;
    const type = await Employee_Types.update({
      typeId: typeId,
      typeName: typeName,
      updateAt: new Date(),
      description: description
    }, { where: { id: id } }).then(() => Employee_Types.findOne({ id: id, raw: true })); 
    res.redirect(`/admin/employee-type/${id}/edit`);
  },
  async destroy(req, res, next) {
    const { id } = req.params;
    const type = await Employee_Types.destroy({ where: { id, } });
    res.redirect('/admin/employee-type');
  },
};
module.exports = EmployeeTypeController;
