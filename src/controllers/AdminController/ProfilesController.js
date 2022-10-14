const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, ResponseApi, Message, MESSAGE } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs')
const ProfilesController = {
    async index(req, res, next) {
        res.render("./admin/profiles/view", Response(res));
    },
    async create(req, res, next) {
        res.send("create");
    },
    async store(req, res, next) {
        res.send("store");
    },
    async show(req, res, next) {
        res.render("./admin/profiles/edit", Response(res));
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
        const { path } = req.file;
        const pathPreFile = "src/" + _user.avatarUrl;
        try {
            if (fs.lstatSync(pathPreFile).isFile()) {
                fs.unlinkSync(pathPreFile)
            }
        } catch (error) {
            console.log(error);
        }
        await Users.update(
            { avatarUrl: path.split("\\").slice(1).join("//") },
            { where: { id: _user.id, username: _user.username } }
        )
            .then(result => {
                res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Change avatar successfully!!!")))
            })
            .catch(error => {
                res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
            })
    },
    async destroy(req, res, next) {
        res.send("destroy");
    },
};
module.exports = ProfilesController;
