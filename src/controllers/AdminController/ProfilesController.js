const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs')
const ProfilesController = {
    async index(req, res, next) {
        res.render("./admin/profiles", Response(res));
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
    async apiUpdate(req, res, next) {
        const { Users } = db;
        const { _user } = res.locals;
        const { path, filename } = req.file;
        console.log(req.file);
        console.log(path.split("\\").slice(1).join("//"));
        await Users.update(
            { avatarUrl: path.split("\\").slice(1).join("//") },
            { where: { id: _user.id, username: _user.username } }
        )
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
        res.json({
            message: "OK"
        })
    },
    async destroy(req, res, next) {
        res.send("destroy");
    },
};
module.exports = ProfilesController;
