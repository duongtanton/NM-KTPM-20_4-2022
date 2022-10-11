const express = require("express");
const { authen } = require("../../middleware/Authentication");
const UsersRouter = express.Router();
const UserHomeRouter = require("./home");
const LogInOutRouter = require("../loginout");


UsersRouter.use("/login", LogInOutRouter);
UsersRouter.use("/", UserHomeRouter);

module.exports = UsersRouter;
