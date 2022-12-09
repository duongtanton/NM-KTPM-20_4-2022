const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, ROOM_STATUS, ResponseApi, Message, MESSAGE } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const moment = require("moment/moment.js");
const { Booking, Rooms, Room_Types } = db;
const CartController = {
    async index(req, res, next) {
        const { _user } = res.locals;
        const { filter } = req.query;
        const query = {}
        if (filter === "ALL" || !filter) {
            //donothing
        } else {
            query.status = filter;
        }

        const bookings = await Booking.findAll({
            where: {
                createdBy: _user.id,
                ...query
            },
            include: [{
                model: Rooms,
                include: [{
                    model: Room_Types,
                }]
            }],
        }).then(r => r.map(i => i.toJSON())).then(rs => rs.map(rs => {
            return {
                ...rs,
                dateIn: `${moment(rs.startDate).format("MM/DD/yyyy")} - ${moment(rs.endDate).format("MM/DD/yyyy")}`
            }
        }));
        res.render("./users/cart", Response(res, 1, null, { bookings }))
    },
    async create(req, res, next) {
        res.send("create");
    },
    async store(req, res, next) {
        res.send("store");
    },
    async show(req, res, next) {
        const { action } = req.query;
        const { id } = req.params;
        if (action === "delete") {
            await Booking.destroy({
                where: { id }
            }).then(_r => {
            }).catch(_e => {
            }).finally(() => {
                res.redirect('back')
            })
        } else if (action === "confirm") {
            await Booking.update({
                status: ROOM_STATUS.ACTIED
            }, {
                where: { id }
            }).then(_r => {
            }).catch(_e => {
                console.log(e);
            }).finally(() => {
                res.redirect('back')
            })
        } else {
            res.redirect('back')
            //donothing
        }
    },
    async edit(req, res, next) {
        res.send("edit");
    },
    async update(req, res, next) {
        const { startDate, id, endDate } = req.body;
        await Booking.update({
            updatedDate: new Date(),
            startDate: new Date(startDate),
            endDate: new Date(endDate),
        }, {
            where: { id }
        })
            .then(_r => {
                res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Update successfully!!!")))
            })
            .catch(_e => {
                res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Some time error!!!")))
            })
    },
    async destroy(req, res, next) {
        res.send("destroy");
    },
};
module.exports = CartController;
