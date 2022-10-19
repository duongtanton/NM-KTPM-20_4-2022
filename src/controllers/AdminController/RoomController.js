const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { Rooms } = db;
const RoomController = {
    async index(req, res, next) {
        try {
            const rooms = await Rooms.findAll({
                raw: true,
            });
            const infoRooms = rooms.map((room) => ({
                ...room,
                image: req.protocol + '://' + req.headers.host + "/" + room.image,
            }))
            res.render("./admin/rooms", { rooms: infoRooms });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async create(req, res, next) {
        try {
            const { name, type, floor, status, description } = req.body;
            const { path } = req.file;
            console.log(
                {
                    name,
                    type,
                    floor,
                    status,
                    description,
                    image: path.split("\\").slice(1).join("//")
                }
            )
            const room = await Rooms.create({
                name,
                type,
                floor,
                status,
                description,
                image: path.split("\\").slice(1).join("//")
            });
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Create room successfully!!!")))
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async store(req, res, next) {
        res.render("./admin/rooms");
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
            res.status(500).json(err);
        }
    },
    async edit(req, res, next) {
        try {
            const { id } = req.params
            const data = req.body;
            const room = await Rooms.update(
                data, {
                where: { id, }
            })
            res.redirect('back');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async update(req, res, next) {
        res.render("./admin/rooms");
    },
    async destroy(req, res, next) {
        const { id } = req.params;
        const room = await Rooms.destroy({ where: { id, } });
        res.redirect('back');
    },
    async destroyMultiple(req, res, next) {
        const data = req.body;
        const idList = data.idList.split(',');
        const rooms = await Rooms.destroy({ where: { id: idList, } });
        res.redirect('back');
    },
};
module.exports = RoomController;
