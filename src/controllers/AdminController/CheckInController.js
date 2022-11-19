const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { Rooms, Room_Types, Check_Ins } = db;
const CheckInController = {
    async index(req, res, next) {
        try {
            const { roomId } = req.params;
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
            const infoRoom = room.toJSON();
            res.render("./admin/check-in", { room: infoRoom });
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        }
    },
    async create(req, res, next) {
        try {
            const { employeeId, userId, checkInDate, checkOutDate } = req.body;
            const { roomId } = req.params;

            if (new Date(checkInDate).getTime() > new Date(checkOutDate).getTime()) {
                return res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
            }

            const checkIn = await Check_Ins.create({
                employeeId: Number(employeeId),
                userId: Number(userId),
                roomId: Number(roomId),
                checkInTime: checkInDate,
                checkOutTime: checkOutDate,
            })
            const editedStatusRoom = await Rooms.update({
                status: 'occupied'
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
module.exports = CheckInController;
