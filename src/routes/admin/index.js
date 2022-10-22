const express = require("express");
const AdminRoute = express.Router();
const AdminHomeRouter = require("./home");
const AdminRoomTypeRouter = require("./RoomType")

const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");
const RoomRouter = require("./rooms");

AdminRoute.use("/rooms-type", AdminRoomTypeRouter)
AdminRoute.use("/rooms", RoomRouter);
AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
