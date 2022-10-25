const express = require("express");
const AdminRoute = express.Router();
const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");
const RoomRouter = require("./rooms");
const PromotionsRouter = require("./promotions");

AdminRoute.use("/promotions", PromotionsRouter);
AdminRoute.use("/rooms", RoomRouter);
AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
