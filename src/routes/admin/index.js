const express = require("express");
const AdminRoute = express.Router();

const AdminTypesRoomRouter = require("./room_types")
const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");
const HotelsRouter = require("./hotels");
const RoomRouter = require("./rooms");
const PromotionsRouter = require("./promotions");
const EmployeeTypeRouter = require("./employee-type");
const EmployeeRouter = require("./employee");
const CheckInRouter = require("./check-in");
const CheckOutRouter = require("./check-out");

AdminRoute.use("/promotions", PromotionsRouter);
AdminRoute.use("/hotel", HotelsRouter);
AdminRoute.use("/room-types", AdminTypesRoomRouter)
AdminRoute.use("/rooms", RoomRouter);
AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/employee-type", EmployeeTypeRouter);
AdminRoute.use("/employee", EmployeeRouter);
AdminRoute.use("/check-in", CheckInRouter);
AdminRoute.use("/check-out", CheckOutRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
