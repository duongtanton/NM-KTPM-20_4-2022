const express = require("express");
const { authen, Authen } = require("../../middleware/Authentication");
const UsersRouter = express.Router();
const UserHomeRouter = require("./home");
const LogInOutRouter = require("../loginout");
const ProfilesRouter = require("./profiles");
const RoomRouter = require("./rooms");
const CartRouter = require("./cart");
const SearchRouter = require("./search");
const HotelRouter = require('./hotel');


UsersRouter.use("/login", LogInOutRouter);
UsersRouter.use("/profiles", Authen, ProfilesRouter);
UsersRouter.use("/rooms", RoomRouter);
UsersRouter.use("/cart", Authen, CartRouter);
UsersRouter.use("/search", SearchRouter);
UsersRouter.use("/hotel", HotelRouter);
UsersRouter.use("/", UserHomeRouter);

module.exports = UsersRouter;
