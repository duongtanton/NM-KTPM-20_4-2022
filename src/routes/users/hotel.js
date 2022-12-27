const express = require("express");
const { HotelController } = require("../../controllers/UsersController");
const UploadFile = require("../../middleware/UploadFile");
var HotelRouter = express.Router();

/* GET users listing. */
HotelRouter.get("/:id", HotelController.show);

module.exports = HotelRouter;
