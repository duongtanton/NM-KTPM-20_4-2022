const express = require("express");
const { StatisticController } = require("../../controllers/AdminController");
var StatisticRouter = express.Router();

StatisticRouter.get("/:id", StatisticController.index);

module.exports = StatisticRouter;
