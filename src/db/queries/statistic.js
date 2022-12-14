const { Model } = require("sequelize");
const { sequelize } = require("../models/index.js");
const db = require("../models/index.js");
const { Booking, Check_Ins, Rooms, Room_Types, Users, Hotels } = db;

const statistic = {
    totalRevenues: async (hotelId) => {
        try {
            const bookings = await Booking.findAll({
                where: hotelId ? {
                    hotelId: hotelId
                } : {},
                include: [
                    {
                        model: Rooms,
                        include: [{
                            model: Room_Types,
                        }]
                    }],
                raw: true
            });
            const revenues = bookings.reduce((a, b) =>
                a + b['Room.Room_Type.price'], 0);
            return revenues;
        } catch (err) {
            return 0;
        }
    },
    totalBookings: async (hotelId) => {
        try {
            const bookings = await Booking.findAll({
                where: hotelId ? {
                    hotelId: hotelId
                } : {},
                raw: true
            });
            return bookings.length;
        } catch (err) {
            return 0;
        }
    },
    totalCheck_ins: async (hotelId) => {
        try {
            var check_ins;
            if (hotelId) {
                const rooms = await Rooms.findAll({
                    where: {
                        hotelId: hotelId
                    },
                    raw: true
                })
                check_ins = await Check_Ins.findAll({
                    where: {
                        roomId: rooms.map(room => room.id)
                    },
                    raw: true
                });
            } else {
                check_ins = await Check_Ins.findAll({ raw: true });
            }
            return check_ins.length;
        } catch (err) {
            return 0;
        }
    },
    totalUsers: async (hotelId) => {
        try {
            var users;
            if (hotelId) {
                const bookings = await Booking.findAll({
                    where: { hotelId: hotelId },
                    raw: true
                })
                users = await Users.findAll({
                    where: { id: bookings.map(booking => booking.createdBy) },
                    raw: true
                });
            } else {
                users = await Users.findAll({ raw: true });
            }
            return users.length;
        } catch (err) {
            return 0;
        }
    },
    topHotels: async () => {
        const hotels = await sequelize.query(`
        SELECT H.*, SUM(RT.price) AS revenues, COUNT(B.id) AS bookings, COUNT(CK.id) AS checkIns
        FROM Hotels H
        INNER JOIN Booking B ON H.id = B.hotelId
        INNER JOIN Rooms R ON R.id = B.roomId
        INNER JOIN Room_Types RT ON R.type = RT.id
        LEFT JOIN Check_Ins CK ON R.id = CK.roomId
        GROUP BY H.id
        ORDER BY revenues DESC, bookings DESC, checkIns DESC;
        `);
        return hotels[0];
    },
    roomTypeStatistics: async (hotelId) => {
        var roomTypeStatistic = await sequelize.query(`
        SELECT RT.*, SUM(RT.price) AS revenues, COUNT(R.id) AS room_numbers
        FROM Rooms R
        INNER JOIN Room_Types RT ON R.type = RT.id
        LEFT JOIN Booking B ON R.id = B.roomId
        WHERE R.hotelId = ${hotelId}
        GROUP BY RT.id 
        ORDER BY revenues DESC;
        `);
        const revenuesByBookingRoom = roomTypeStatistic[0].reduce((a, b) =>
            b.revenues ? a + b.revenues : a, 0);

        roomTypeStatistic = roomTypeStatistic[0].map(roomType => ({
            ...roomType,
            percentage: roomType.revenues ? Number(100 * (roomType.revenues / revenuesByBookingRoom)).toFixed(2) : Number(0).toFixed(2)
        }));
        return roomTypeStatistic;
    },
    roomStatistics: async (hotelId) => {
        var roomStatistic = await sequelize.query(`
        SELECT R.*, SUM(DATEDIFF(CI.checkOutTime,CI.checkInTime)) AS total_days
        FROM Rooms R
        LEFT JOIN Check_Ins CI ON R.id = CI.roomId
        WHERE R.hotelId = ${hotelId}
        GROUP BY R.id;
        `);
        const totalDays = roomStatistic[0].reduce((a, b) =>
            b.total_days ? a + Number(b.total_days) : a, 0);

        roomStatistic = roomStatistic[0].map(room => ({
            ...room,
            percentage: room.total_days ? Number(100 * (room.total_days / totalDays)).toFixed(2) : Number(0).toFixed(2)
        }));
        return roomStatistic;
    },
    userStatistics: async (hotelId) => {
        var userStatistic = await sequelize.query(`
        SELECT U.*, SUM(RT.price) AS amount, COUNT(U.id) AS visits
        FROM Booking B, Users U, Rooms R, Room_Types RT
        WHERE B.createdBy = U.id AND B.roomId = R.id AND R.type = RT.id AND R.hotelId = ${hotelId}
        GROUP BY U.id;
        `);
        userStatistic = userStatistic[0].map(user => ({
            ...user,
            username: '',
            password: ''
        }));

        return userStatistic;
    }
}
module.exports = statistic;
