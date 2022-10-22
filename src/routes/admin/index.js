const express = require("express");
const AdminRoute = express.Router();
const AdminHomeRouter = require("./home");
const AdminRoomTypeRouter = require("./RoomType")

AdminRoute.use("/room-type", AdminRoomTypeRouter)
AdminRoute.use("/", AdminHomeRouter);

module.exports = AdminRoute;
