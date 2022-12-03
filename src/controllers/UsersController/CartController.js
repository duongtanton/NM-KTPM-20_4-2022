const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const { Booking, Rooms, Room_Types } = db;
const CartController = {
    async index(req, res, next) {
        const { _user } = res.locals;
        const bookings = await Booking.findAll({
            where: {
                createdBy: _user.id
            },
            include: [{
                model: Rooms,
                include: [{
                    model: Room_Types,
                }]
            }],
        }).then(r => r.map(i => i.toJSON()));
        res.render("./users/cart", Response(res, 1, null, { bookings }))
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
        res.send("destroy");
    },
};
module.exports = CartController;
