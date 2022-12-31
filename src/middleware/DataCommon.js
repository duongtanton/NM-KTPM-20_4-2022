const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
const { ROOM_STATUS } = require('../common');
dotenv.config();


const DataCommon = (req, res, next) => {
    const token = req.cookies.auth || req.headers.auth;
    const { Users, Booking } = db;
    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        try {
            if (!decode) { throw Error() }
            const { username, id } = decode;
            const _user = await Users.findOne({ where: { username, id } }).then(result => result?.toJSON());
            const bookingNew = await Booking.findAll({
                where: {
                    status: ROOM_STATUS.NEW,
                    createdBy: _user.id
                },
                raw: true,
            });
            res.locals._user = _user;
            res.locals.amountBookingNew = bookingNew?.length || 0;
            res.locals.url = req.protocol + '://' + req.get('host');
            next();
        } catch (err) {
            console.log(err);
            next();
        }
    })
}
module.exports = {
    DataCommon
}