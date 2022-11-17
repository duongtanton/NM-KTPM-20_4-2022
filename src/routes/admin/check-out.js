const express = require("express");
const { CheckOutController } = require("../../controllers/AdminController");
var AdminRouter = express.Router();

AdminRouter.get("/:roomId", CheckOutController.index);
AdminRouter.post("/create", CheckOutController.create);

module.exports = AdminRouter;
