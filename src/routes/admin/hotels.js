const express = require("express");
const HotelController = require("../../controllers/AdminController/HotelsController");
var HotelRouter = express.Router();

/* GET users listing. */
HotelRouter.get("/", HotelController.index);
HotelRouter.post("/create", HotelController.create);
HotelRouter.post("/", HotelController.store);
HotelRouter.get("/:id", HotelController.show);
HotelRouter.post("/:id/edit", HotelController.edit);
HotelRouter.patch("/", HotelController.update);
HotelRouter.put("/", HotelController.update);
HotelRouter.delete("/:id", HotelController.destroy);

module.exports = HotelRouter;
