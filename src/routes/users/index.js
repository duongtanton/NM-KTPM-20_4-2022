const express = require("express");
const { authen, Authen } = require("../../middleware/Authentication");
const UsersRouter = express.Router();
const UserHomeRouter = require("./home");
const LogInOutRouter = require("../loginout");
const ProfilesRouter = require("./profiles");
const RoomsRouter = require("./rooms");
const SearchRouter = require("./search");
const { DataCommon } = require("../../middleware/DataCommon");


UsersRouter.use("/login", LogInOutRouter);
UsersRouter.use("/profiles", Authen, ProfilesRouter);
UsersRouter.use("/rooms", RoomsRouter);
UsersRouter.use("/search", SearchRouter);
UsersRouter.use("/", UserHomeRouter);

module.exports = UsersRouter;
