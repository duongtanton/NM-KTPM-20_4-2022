const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
dotenv.config();


const DataCommon = (req, res, next) => {
    const token = req.cookies.auth || req.headers.auth;
    const { Users } = db;
    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        try {
            const { username, id } = decode;
            const _user = await Users.findOne({ where: { username, id } }).then(result => result?.toJSON());
            res.locals._user = _user;s
            res.locals.url = req.protocol + '://' + req.get('host');
            next();
        } catch {
            next();
        }
    })

}
module.exports = {
    DataCommon
}