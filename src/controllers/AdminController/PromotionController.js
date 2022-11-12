const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { Promotions } = db;
const PromotionController = {
    async index(req, res, next) {
        try {
            const promotions = await Promotions.findAll({
                raw: true,
            });
            console.log(promotions);
            res.render("./admin/promotions", Response(res, 1, null, { promotions }));
        } catch (err) {
            res.status(500).json(err);
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
            res.redirect('back');
        } catch (err) {
            res.status(500).json(err);
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
            const { id } = req.params
            const data = req.body;
            const promotion = await Promotions.update(
                data, {
                where: { id, }
            })
            res.redirect('back');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async update(req, res, next) {
        res.render("./admin/promotions", Response(res, 1, null, null));
    },
    async destroy(req, res, next) {
        const { id } = req.params;
        const promotion = await Promotions.destroy({ where: { id, } });
        res.redirect('back');
    },
    async destroyMultiple(req, res, next) {
        const data = req.body;
        const idList = data.idList.split(',');
        const promotions = await Promotions.destroy({ where: { id: idList, } });
        res.redirect('back');
    },
};
module.exports = PromotionController;