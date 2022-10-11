const express = require("express");
const AdminRoute = express.Router();
const ProfilesRouter = require("./profiles");
const HomeRouter = require("./home");


AdminRoute.use("/profiles", ProfilesRouter);
AdminRoute.use("/", HomeRouter);

module.exports = AdminRoute;
