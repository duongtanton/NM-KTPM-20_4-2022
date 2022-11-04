const express = require("express");
const AdminRoute = express.Router();
const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");
const HotelsRouter = require("./hotels");
const RoomRouter = require("./rooms");
const EmployeeTypeRouter = require("./employee-type");

AdminRoute.use("/hotels", HotelsRouter);
AdminRoute.use("/rooms", RoomRouter);
AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/employee-type",EmployeeTypeRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
