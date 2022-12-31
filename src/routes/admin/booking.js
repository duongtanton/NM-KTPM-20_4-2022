const express = require("express");
const BookingController = require("../../controllers/AdminController/BookingController.js");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", BookingController.index);
AdminRouter.post("/create", BookingController.create);
AdminRouter.post("/", BookingController.store);
AdminRouter.get("/:id", BookingController.show);
AdminRouter.post("/:id/edit", BookingController.edit);
AdminRouter.patch("/", BookingController.update);
AdminRouter.put("/", BookingController.update);
AdminRouter.delete("/:id", BookingController.destroy);

module.exports = AdminRouter;
