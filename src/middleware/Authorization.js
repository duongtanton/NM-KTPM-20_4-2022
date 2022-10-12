const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
const { LAYOUT, ROLES } = require('../common');
dotenv.config();


const Author = (role) => {
    const { Users, Roles, Users_Roles } = db;
    return (req, res, next) => {
        const token = req.cookies.auth || req.headers.auth;
        jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
            if (!decode || Object.keys(decode)?.length <= 0) {
                res.redirect("/login");
            } else {
                const { id } = decode;
                const users_roles = await Users_Roles.findAll({
                    where: { userId: id },
                    include: Roles,
                }).then(result => result.map(rs => rs?.toJSON()));
                const haspPemission = users_roles.some(ur => ur?.Role?.code === role)
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