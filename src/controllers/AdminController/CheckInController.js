const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs');
const { Rooms, Room_Types, Check_Ins, Check_Outs, Users, Roles } = db;
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
            res.render("./admin/check-in", { room: infoRoom, employeeId: res.locals._user.id });
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        }
    },
    async create(req, res, next) {
        try {
            const { userId, checkInDate, checkOutDate } = req.body;
            const { roomId } = req.params;

            if (new Date(checkInDate).getTime() > new Date(checkOutDate).getTime()) {
                return res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
            }

            const checkIn = await Check_Ins.create({
                employeeId: Number(res.locals._user.id),
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
    async show(req,res,next){
        try {
            const checkOut = await Check_Outs.findAll({
                raw:true,
            })
            const checkIn = await Check_Ins.findAll({
                raw: true,
            });

            res.render("./admin/check-in/view", {checkIn, checkOut});
        }
        catch(err){
            res.json(Response(res,1,Message(MESSAGE.ERROR,"Sometime wrong. Try again!!!")));
        }
    },
};
module.exports = CheckInController;
