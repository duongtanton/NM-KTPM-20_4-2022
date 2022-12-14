const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const statistic = require("../../db/queries/statistic.js");
const { sequelize } = require("../../db/models/index.js");
const { Hotels } = db;

const StatisticController = {
    async index(req, res, next) {
        const { id } = req.params;
        const hotel = await Hotels.findOne({
            where: { id: id },
            raw: true,
        });
        const totalRevenues = await statistic.totalRevenues(id);
        const totalBookings = await statistic.totalBookings(id);
        const totalCheck_ins = await statistic.totalCheck_ins(id);
        const totalUsers = await statistic.totalUsers(id);
        const roomTypeStatistic = await statistic.roomTypeStatistics(id);
        const roomStatistic = await statistic.roomStatistics(id);
        const userStatistic = await statistic.userStatistics(id);

        res.render("./admin/statistic", Response(res, 1, null, {
            totalRevenues,
            totalBookings,
            totalCheck_ins,
            totalUsers,
            hotel,
            roomTypeStatistic,
            roomStatistic,
            userStatistic
        }));
    },
};
module.exports = StatisticController;
