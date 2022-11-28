const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ROLES, Response, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const jwt = require('jsonwebtoken');
const { Hotels } = db;

const HotelsController = {
  async index(req, res, next) {
    try {
      const hotels = await Hotels.findAll({
        raw: true,
      });
      res.render("./admin/hotels/view", Response(res, 1, null, { hotels }));
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async display(req, res, next) {
    try {
      res.render("./admin/hotels/add");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async create(req, res, next) {
    try {
      const { hotelName, hotelCode, hotelAddress } = req.body;
      const hotel = await Hotels.findOne({ where: { code: hotelCode } });

      if (hotel != null) {
        res.render("./admin/hotels/add", Response(res, 0, Message(MESSAGE.ERROR, "This hotel already exists!"), null));
      } else {
        const hotel = await Hotels.create({ name: hotelName, code: hotelCode, hotelAddress: hotelAddress }).then(result => result?.toJSON());
        res.render("./admin/hotels/add", Response(res, 1, Message(MESSAGE.SUCCESS, "Add hotel successfully!"), null));
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async store(req, res, next) {
    res.render("./admin/hotels/view");
    res.send("store");
  },

  async show(req, res, next) {
    const { id } = req.params;
    const hotel = await Hotels.findOne(
      { where: { id: id } },
      { raw: true }
    ).then(r => r?.toJSON());
    res.render("./admin/hotels/infor", { hotel });
  },

  async edit(req, res, next) {
    const { id } = req.params;
    const hotel = await Hotels.findOne(
      { where: { id: id } },
      { raw: true }
    ).then(r => r.toJSON());
    res.render("./admin/hotels/edit", Response(res, 1, null, { hotel: hotel }));
  },

  async update(req, res, next) {
    const { hotelName, hotelCode, hotelAddress, roomAmount, employeeAmount, description, idHotel } = req.body;
    const hotel = await Hotels.update({
      name: hotelName,
      code: hotelCode,
      hotelAddress,
      roomAmount,
      employeeAmount,
      updateAt: new Date(),
      description
    }, { where: { id: idHotel } }).then(() => Hotels.findOne({ id: idHotel, raw: true })); 
    res.redirect(`/admin/hotels/${idHotel}/edit`);
  },

  async destroy(req, res, next) {
    const { id } = req.params;
    const hotel = await Hotels.destroy({ where: { id, } });
    res.redirect('/admin/hotels');
  },

};
module.exports = HotelsController;
