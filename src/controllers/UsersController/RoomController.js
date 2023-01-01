const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, Message, MESSAGE, ROOM_STATUS, ResponseApi } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const moment = require("moment/moment.js");
const { Rooms, Room_Types, Booking } = db;
const RoomController = {
    async index(req, res, next) {
        try {
            const rooms = await Rooms.findAll({
                where: {
                    status: 'available',
                },
                include: [{
                    model: Room_Types,
                    attributes: ['name', 'price', 'bedNumber']
                }]
            }, {
                raw: true,
            });
            const infoRooms = rooms.map((room) => ({
                ...room.dataValues,
            }))
            res.status(200).json(infoRooms);
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!"), err));
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
            const typeRoom = await Room_Types.findOne(
                { where: { roomNumber: infoRoom.type } },
                { raw: true }
            );
            const infoType = typeRoom.dataValues;
            res.render("./users/room/roomDetail", { infoRoom, infoType });
        } catch (err) {
            console.log(err);
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async booking(req, res, next) {
        const { _user } = res.locals;
        if (!_user) {
            return res.json({
                rediectTo: "login"
            });
        }
        const { roomId } = req.body;
        await Booking.create({
            createdBy: _user.id,
            hotelId: _user.hotelId,
            startDate: moment().valueOf(),
            endDate: moment().valueOf(),
            roomId,
            status: ROOM_STATUS.NEW
        })
            .then(result => {
                return Promise.all([
                    result,
                    Booking.findAll({
                        where: {
                            status: ROOM_STATUS.NEW,
                            createdBy: _user.id
                        },
                        raw: true,
                    })
                ])
            })
            .then(results => {
                const booking = results[0];
                const bookings = results[1];
                res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Add to cart successfully!!!"), { booking, bookings }));
            })

    }
};
module.exports = RoomController;
