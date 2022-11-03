const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, ResponseApi, Message, MESSAGE } = require("../../common")
const bcrypt = require("../../util/bcrypt.js");

const { Enterprises, Users } = db;

const ProfilesController = {
    async index(req, res, next) {

        if (res.locals._user) {
            const { _user } = res.locals
            const user = await Users.findOne({ where: { id: _user.id } }).then(r => r.toJSON());
            _user.user = user;
            res.locals._user = _user;
            console.log(1);
            res.render("./users/profiles/view", Response(res));
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
        const { _user } = res.locals;
        const user = await Users.findOne({ where: { id: _user.id } }).then(r => r.toJSON());
        _user.user = user;
        res.locals._user = _user;
        res.render("./users/profiles/edit", Response(res));
    },
    async edit(req, res, next) {
        res.send("edit");
    },
    async update(req, res, next) {
        const { _user } = res.locals;
        const {name, email, phone} = req.body;
        console.log(name);
        const user = await Users.update({
            nickname : name,
            email : email,
            phone: phone,
            updateAt: new Date()
        }, { where: { id: _user.id } }).then(() => Users.findOne({ id: _user.id, raw: true }));
        console.log(name);
        _user.user = user;
        res.locals._user = _user;
        // res.render("./profiles", Response(res, 1, Message(MESSAGE.SUCCESS, "Update profile successfully!!!")));
        res.redirect("/profiles");
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
