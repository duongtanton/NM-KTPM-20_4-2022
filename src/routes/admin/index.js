const express = require("express");
const AdminRoute = express.Router();
const AdminHomeRouter = require("./home");

AdminRoute.use("/", AdminHomeRouter);

module.exports = AdminRoute;
