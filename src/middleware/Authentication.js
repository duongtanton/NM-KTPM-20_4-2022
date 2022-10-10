const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();


const authen = (req, res, next) => {
    const token = req.cookies.auth;
    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        if (!decode && Object.keys(decode)?.length <= 0) {
            res.redirect("/");
        } else {
            const { iat, exp } = decode;
            delete decode.exp;
            delete decode.iat;
            if (Date.now() >= exp * 1000) {
                res.render("./users/login")
            } else {
                const token = jwt.sign(decode, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
                res.cookie("auth", token);
                next();
            }
        }
    })
}
module.exports = {
    authen
}