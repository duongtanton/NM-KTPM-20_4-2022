const express = require("express");
const TimekeepingController = require("../../controllers/AdminController/TimekeepingController");
var TimekeepingRouter = express.Router();

/* GET users listing. */
TimekeepingRouter.get("/", TimekeepingController.index);
TimekeepingRouter.post("/create", TimekeepingController.create);
TimekeepingRouter.post("/", TimekeepingController.store);
TimekeepingRouter.get("/:id", TimekeepingController.show);
TimekeepingRouter.post("/:id/edit", TimekeepingController.edit);
TimekeepingRouter.patch("/", TimekeepingController.update);
TimekeepingRouter.put("/", TimekeepingController.update);
TimekeepingRouter.delete("/:id", TimekeepingController.destroy);

module.exports = TimekeepingRouter;
