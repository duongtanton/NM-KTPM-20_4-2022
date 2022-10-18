const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, ResponseApi, Message, MESSAGE } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs')
const { Enterprises, Users } = db;
const ProfilesController = {
    async index(req, res, next) {
        const { _user } = res.locals;
        const enterprise = await Enterprises.findOne({ where: { id: _user.enterpriseId } }).then(r => r.toJSON());
        _user.enterprise = enterprise;
        res.locals._user = _user;
        res.render("./admin/profiles/view", Response(res));
    },
    async create(req, res, next) {
        res.send("create");
    },
    async store(req, res, next) {
        res.send("store");
    },
    async show(req, res, next) {
        const { _user } = res.locals;
        const enterprise = await Enterprises.findOne({ where: { id: _user.enterpriseId } }).then(r => r.toJSON());
        _user.enterprise = enterprise;
        res.locals._user = _user;
        res.render("./admin/profiles/edit", Response(res));
    },
    async edit(req, res, next) {
        res.send("edit");
    },
    async update(req, res, next) {
        const { code, name, localtion, email, phone, verified } = req.body;
        const { _user } = res.locals;
        const enterprise = await Enterprises.update({
            name,
            localtion,
            email,
            phone,
            updateAt: new Date()
        }, { where: { code, id: _user.enterpriseId } }).then(() => Enterprises.findOne({ id: _user.enterpriseId, raw: true }));
        _user.enterprise = enterprise;
        res.locals._user = _user;
        res.render("./admin/profiles/edit", Response(res, 1, Message(MESSAGE.SUCCESS, "Update profile successfully!!!")));
    },
    async apiUpdate(req, res, next) {
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
