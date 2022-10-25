const express = require("express");
const AdminRoute = express.Router();

const AdminTypesRoomRouter = require("./room_types")

const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");
const HotelsRouter = require("./hotels");
const RoomRouter = require("./rooms");
const PromotionsRouter = require("./promotions");

AdminRoute.use("/promotions", PromotionsRouter);
AdminRoute.use("/hotels", HotelsRouter);
AdminRoute.use("/room-types", AdminTypesRoomRouter)
AdminRoute.use("/rooms", RoomRouter);
AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
