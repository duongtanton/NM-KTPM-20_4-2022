const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs');
const { Rooms, Room_Types } = db;
const RoomController = {
    async index(req, res, next) {
        try {
            const { _user } = res.locals
            const rooms = await Rooms.findAll({
                where: {
                    hotelId: _user.hotelId
                },
                raw: true,
            });
            // const infoRooms = rooms.map((room) => ({
            //     ...room,
            //     image: req.protocol + '://' + req.headers.host + "/" + room.image,
            // }))
            // res.render("./admin/rooms", { rooms: infoRooms });
            console.log(rooms);
            res.render("./admin/rooms", { rooms });
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!"), { err }));
        }
    },
    async create(req, res, next) {
        try {
            const { _user } = res.locals
            const { name, type, floor, status, description } = req.body;
            const { path } = req.file;

            const room = await Rooms.create({
                name,
                type,
                floor,
                status,
                description,
                hotelId: _user.hotelId,
                image: path.split("\\").slice(1).join("//"),
            });
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Create room successfully!!!")))
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!"), { err }))
        }
    },
    async store(req, res, next) {
        res.render("./admin/rooms");
    },
    async show(req, res, next) {
        try {
            const { _user } = res.locals
            const { id } = req.params;
            const { view } = req.query;
            const room = await Rooms.findOne(
                {
                    where: {
                        id: id,
                        hotelId: _user?.hotelId,
                    },
                    include: [{
                        model: Room_Types,
                        attributes: ['name', 'price', 'bedNumber']
                    }]
                },

                { raw: true }
            );
            const infoRoom = room.toJSON();
            if (view) {
                res.status(200).json({
                    ...infoRoom,
                    image: req.protocol + '://' + req.headers.host + "/" + infoRoom.image,
                });
            } else {
                res.render("./admin/rooms/view", { room: infoRoom });
            }
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!"), { err }))
        }
    },
    async edit(req, res, next) {
        try {
            const { id } = req.params;
            let path, urlImg;

            if (req.file) {
                path = req.file.path;
                const roomById = await Rooms.findOne({ where: { id, } });
                urlImg = 'src/' + roomById.toJSON().image;
            }
            const data = path
                ? {
                    ...req.body,
                    image: path.split("\\").slice(1).join("//"),
                }
                : req.body;

            const room = await Rooms.update(
                data, {
                where: { id, }
            })

            if (urlImg && fs.lstatSync(urlImg).isFile()) {
                fs.unlinkSync(urlImg);
            }

            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Update room successfully!!!")));
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!"), { err }));
        }
    },
    async update(req, res, next) {
        res.render("./admin/rooms");
    },
    async destroy(req, res, next) {
        try {
            const { id } = req.params;
            let urlImg;
            const roomById = await Rooms.findOne({ where: { id, } });
            urlImg = 'src/' + roomById.toJSON().image;

            const room = await Rooms.destroy({ where: { id, } });
            if (urlImg && fs.lstatSync(urlImg).isFile()) {
                fs.unlinkSync(urlImg);
            }
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete room successfully!!!")));
        }
        catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!"), { err }));
        }
    },
    async destroyMultiple(req, res, next) {
        try {
            const { idList } = req.body;
            let urlImgs = [];
            const roomById = await Rooms.findAll({ where: { id: idList } });
            urlImgs = roomById.map(room => 'src/' + room.toJSON().image);

            const rooms = await Rooms.destroy({ where: { id: idList, } });
            if (urlImgs.length > 0) {
                urlImgs.forEach((urlImg) => {
                    if (fs.lstatSync(urlImg).isFile()) {
                        fs.unlinkSync(urlImg);
                    }
                })
            }
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete rooms successfully!!!")));
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")), { err });
        }
    },
};
module.exports = RoomController;
