const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, Message, MESSAGE } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const { Rooms } = db;
const RoomController = {
    async index(req, res, next) {
        try {
            const rooms = await Rooms.findAll({
                where: {
                    status: 'available',
                }
            }, {
                raw: true,
            });
            const infoRooms = rooms.map((room) => ({
                ...room.dataValues,
                image: req.protocol + '://' + req.headers.host + "/" + room.image,
            }))
            res.status(200).json(infoRooms);
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async show(req, res, next) {
        try {
            const { id } = req.params;
            const room = await Rooms.findOne(
                { where: { id: id } },
                { raw: true }
            );
            const infoRoom = room.dataValues;
            res.status(200).json({
                ...infoRoom,
                image: req.protocol + '://' + req.headers.host + "/" + infoRoom.image,
            });
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
};
module.exports = RoomController;