const express = require("express");
const AdminRoute = express.Router();

const AdminTypesRoomRouter = require("./room_types")

const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");
const RoomRouter = require("./rooms");

AdminRoute.use("/room-types", AdminTypesRoomRouter)
AdminRoute.use("/rooms", RoomRouter);
AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
