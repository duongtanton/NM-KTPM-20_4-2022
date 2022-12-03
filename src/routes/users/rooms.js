const express = require("express");
const { RoomController } = require("../../controllers/UsersController");
const UploadFile = require("../../middleware/UploadFile");
var UsersRouter = express.Router();

/* GET users listing. */
UsersRouter.get("/", RoomController.index);
UsersRouter.post("/booking", RoomController.booking);
UsersRouter.get("/:id", RoomController.show);

module.exports = UsersRouter;
