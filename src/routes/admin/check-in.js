const express = require("express");
const { CheckInController } = require("../../controllers/AdminController");
var AdminRouter = express.Router();

AdminRouter.get("/:roomId", CheckInController.index);
AdminRouter.post("/create/:roomId", CheckInController.create);

module.exports = AdminRouter;
