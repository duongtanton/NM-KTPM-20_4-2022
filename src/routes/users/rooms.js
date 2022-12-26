const express = require("express");
const { RoomController } = require("../../controllers/UsersController");
const UploadFile = require("../../middleware/UploadFile");
var RoomRouter = express.Router();

/* GET users listing. */
RoomRouter.get("/", RoomController.index);
RoomRouter.post("/booking", RoomController.booking);
RoomRouter.get("/:id", RoomController.show);

module.exports = RoomRouter;
