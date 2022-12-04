const db = require("../../db/models/index.js");
const { CONSTANT, Response, ResponseApi, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { Model } = require("sequelize");

const { Booking, Room_Types, Rooms, Users } = db;
const AdminController = {
  async index(req, res, next) {
    const { _user } = res.locals;
    const bookings = await Booking.findAll({
      where: {
        hotelId: _user.id
      },
      include: [{
        model: Users,
        source: "createdBy",
      },
      {
        model: Rooms,
        include: [{
          model: Room_Types,
        }]
      }]
    }).then(rs => rs.map(i => i.toJSON()));
    res.render("./admin/booking", Response(res, 1, null, { bookings }));
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
    try {
      const { id } = req.params;
      const booking = await Booking.destroy({ where: { id, } });
      res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete booking successfully!!!")));
    }
    catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
};
module.exports = AdminController;
