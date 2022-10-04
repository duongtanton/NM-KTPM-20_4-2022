const express = require("express");
const UsersRouter = express.Router();
const UserHomeRouter = require("./home");


UsersRouter.use("/", UserHomeRouter);


module.exports = UsersRouter;
