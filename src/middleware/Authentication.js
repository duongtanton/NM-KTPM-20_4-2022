const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
dotenv.config();


const Authen = (req, res, next) => {
    const { Users } = db;
    const token = req.cookies.auth || req.header.auth;
    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        if (!error) {
            if (!decode || Object.keys(decode)?.length <= 0) {
                res.redirect("/");
            } else {
                const { iat, exp, username, id } = decode;
                const _user = await Users.findOne({ where: { username, id } }).then(result => result?.toJSON());
                if (Date.now() > exp * 1000 || !_user) {
                    res.redirect("/login")
                } else {
                    const token = jwt.sign(_user, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
                    res.cookie("auth", token);
                    next();
                }
            }
        } else {
            res.redirect("/login")
        }
    })
}
module.exports = {
    Authen
}