const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
const { LAYOUT, ROLES } = require('../common');
dotenv.config();


const Author = (_role) => {
    const { Users, Roles, Users_Roles } = db;
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
                const haspPemission = user?.Roles?.some(role => role?.code === _role) || false;
                if (haspPemission) {
                    next();
                } else {
                    res.redirect("/login");
                }
            }
        })
    }
}
module.exports = {
    Author
}