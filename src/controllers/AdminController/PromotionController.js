const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { Promotions } = db;
const PromotionController = {
    async index(req, res, next) {
        try {
            console.log("aaaaaaaaaaaaa");
            const promotions = await Promotions.findAll({
                raw: true,
            });
            console.log(promotions);
            res.render("./admin/promotions", Response(res, 1, null, { promotions }));
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async create(req, res, next) {
        try {
            const { name, status, value } = req.body;
            const promotion = await Promotions.create({
                name,
                status,
                value,
            });
            res.json(Response(res, 1, Message(MESSAGE.SUCCESS, "Create promotions successfully!!!")))
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        }
    },
    async store(req, res, next) {
        res.render("./admin/promotions");
    },
    async show(req, res, next) {
        try {
            const { id } = req.params;
            const promotion = await Promotions.findOne(
                { where: { id: id } },
                { raw: true }
            );
            res.status(200).json(promotion.dataValues);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async edit(req, res, next) {
        try {
            console.log("aaaaaaaaaaaaa");
            const { id } = req.params;
            const newdata = req.body;
            const promotion = await Promotions.update(newdata, {
                where: { id, }
            })
            res.json(Response(res, 1, Message(MESSAGE.SUCCESS, "Update promotions successfully!!!")));
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async update(req, res, next) {
        res.render("./admin/promotions");
    },
    async destroy(req, res, next) {
        try {
            const { id } = req.params;
            const promotion = await Promotions.destroy({ where: { id, } });
            res.json(Response(res, 1, Message(MESSAGE.SUCCESS, "Delete promotions successfully!!!")));
        }
        catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async destroyMultiple(req, res, next) {
        try {
            const data = req.body;
            const idList = data.idList.split(',');
            const promotions = await Promotions.destroy({ where: { id: idList, } });
            res.json(Response(res, 1, Message(MESSAGE.SUCCESS, "Delete rooms successfully!!!")));
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
};
module.exports = PromotionController;