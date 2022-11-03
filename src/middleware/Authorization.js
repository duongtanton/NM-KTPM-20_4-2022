const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
const { LAYOUT, ROLES } = require('../common');
dotenv.config();
const { Users, Roles, Enterprises } = db;


const Author = (_role) => {
    return (req, res, next) => {
        const token = req.cookies.auth || req.headers.auth;
        jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
            if (!decode || Object.keys(decode)?.length <= 0) {
                res.redirect("/login");
            } else {
                const { id } = decode;
                const user = await Users.findOne({
                    where: { id },
                    include: Roles,
                }).then(result => result?.toJSON());
                let haspPemission = false;
                if (typeof _role === "string") {
                    haspPemission = user?.Roles?.some(role => role?.code === _role) || false;
                }
                if (_role?.length > 0) {
                    haspPemission = user?.Roles?.some(role => _role.includes(role?.code)) || false;
                }
                if (haspPemission) {
                    next();
                } else {
                    res.redirect("/login");
                }
            }
        })
    }
}
const AuthorVerify = async (req, res, next) => {
    const { _user } = res.locals;
    const { originalUrl, method } = req;
    const except = [
        {
            url: "/admin/profiles/edit",
            type: ["GET"]
        },
        {
            url: "/admin/profiles?_method=PATCH",
            type: ["PATCH"]
        }
    ]
    if (except.some(item => item.url === originalUrl && item.type.includes(method))) {
        next()
        return;
    }
    const enterprise = await Enterprises.findOne({
        where: {
            id: _user.enterpriseId,
            verified: true
        },
    }).then(result => result?.toJSON());
    if (!!enterprise) {
        next()
    } else {
        res.redirect("/admin/profiles/edit")
    }
}
module.exports = {
    Author,
    AuthorVerify,
}