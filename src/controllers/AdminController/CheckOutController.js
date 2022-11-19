const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { sequelize } = require("../../db/models/index.js");
const { Rooms, Room_Types, Check_Ins, Check_Outs } = db;

const CheckOutController = {
  async index(req, res, next) {
    try {
      const { roomId } = req.params;
      console.log(roomId);
      const room = await Rooms.findOne(
        {
          where: { id: roomId },
          include: [{
            model: Room_Types,
            attributes: ['name', 'price', 'bedNumber']
          }]
        },

        { raw: true }
      );

      const info = await sequelize.query(
        `SELECT U.id AS userId, CI.id AS checkInId, CI.checkInTime, CI.checkOutTime, CI.employeeId
        FROM Check_Ins AS CI, Users AS U
        WHERE CI.roomId = ${roomId} AND CI.userId = U.Id AND CI.ID != ALL (
          SELECT checkInId
            FROM Check_Outs
        )`,
        { raw: true }
      );
      const infoRoom = room.toJSON();
      res.render("./admin/check-out", {
        room: infoRoom, user: {
          id: info[0][0].userId,
        }, checkIn: {
          id: info[0][0].checkInId,
          employeeId: info[0][0].employeeId,
          checkInTime: info[0][0].checkInTime,
          checkOutTime: info[0][0].checkOutTime
        }
      });
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
    }
  },
  async create(req, res, next) {
    try {
      const { checkInId, employeeId } = req.body;
      const { roomId } = req.params;

      const checkOut = await Check_Outs.create({
          employeeId: Number(employeeId),
          checkInId: Number(checkInId),
      })

      const editedStatusRoom = await Rooms.update({
          status: 'available'
      }, {
          where: {
              id: Number(roomId)
          }
      })
      res.redirect('/admin/rooms');
  } catch (err) {
      res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
  }
  },
};
module.exports = CheckOutController;
