const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const db = require('../db/models');
const { ROOM_STATUS } = require('../common');
const { Users, Booking, Roles } = db;
dotenv.config();


const DataCommon = (req, res, next) => {
    const token = req.cookies.auth || req.headers.auth;
    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        try {
            if (!decode) { throw Error() }
            const { username, id } = decode;
            const _user = await Users.findOne({
                where: { username, id },
                include: Roles,
            }).then(result => result?.toJSON());
            _user.roleMaxId = _user.Roles.sort((a, b) => a?.id > a?.id)?.[0]?.id || null;
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