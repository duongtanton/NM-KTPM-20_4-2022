const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();


const DataCommon = (req, res, next) => {
    const token = req.cookies.auth;
    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        delete decode?.exp;
        delete decode?.iat;
        res.locals._user = decode;
        next();
    })
}
module.exports = {
    DataCommon
}