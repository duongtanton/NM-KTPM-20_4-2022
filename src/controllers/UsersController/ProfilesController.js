const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const ProfilesController = {
    async index(req, res, next) {
        if (res.locals.user) {
            res.render("./users/profiles", Response(res));
        } else {
            res.redirect("/login");
        }
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
module.exports = ProfilesController;
