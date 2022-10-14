const express = require("express");
const { RoomController } = require("../../controllers/AdminController");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", RoomController.index);
AdminRouter.post("/create", RoomController.create);
AdminRouter.post("/", RoomController.store);
AdminRouter.get("/:id", RoomController.show);
AdminRouter.post("/:id/edit", RoomController.edit);
AdminRouter.patch("/", RoomController.update);
AdminRouter.put("/", RoomController.update);
AdminRouter.delete("/:id", RoomController.destroy);
AdminRouter.delete("/", RoomController.destroyMultiple);

module.exports = AdminRouter;
