const express = require("express");
const { CheckOutController } = require("../../controllers/AdminController");
var AdminRouter = express.Router();

AdminRouter.get("/:roomId", CheckOutController.index);
AdminRouter.post("/create/:roomId", CheckOutController.create);
AdminRouter.get("/show",CheckOutController.show);

module.exports = AdminRouter;
