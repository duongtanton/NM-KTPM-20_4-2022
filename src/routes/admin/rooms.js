const express = require("express");
const { RoomController } = require("../../controllers/AdminController");
const UploadFile = require("../../middleware/UploadFile");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", RoomController.index);
AdminRouter.post("/create", UploadFile.single("admin", "room-image"), RoomController.create);
AdminRouter.post("/", RoomController.store);
AdminRouter.get("/:id", RoomController.show);
AdminRouter.post("/:id/edit", UploadFile.single("admin", "room-image"), RoomController.edit);
AdminRouter.patch("/", RoomController.update);
AdminRouter.put("/", RoomController.update);
AdminRouter.delete("/:id", RoomController.destroy);
AdminRouter.delete("/", RoomController.destroyMultiple);

module.exports = AdminRouter;
