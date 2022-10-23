const express = require("express");
const HotelsController = require("../../controllers/AdminController/HotelsController.js");
var HotelsRouter = express.Router();

/* GET users listing. */
HotelsRouter.get("/create", HotelsController.display);
HotelsRouter.get("/", HotelsController.index);
HotelsRouter.post("/create", HotelsController.create);
HotelsRouter.post("/", HotelsController.store);
HotelsRouter.get("/:id", HotelsController.show);
HotelsRouter.get("/:id/edit", HotelsController.edit);
HotelsRouter.patch("/", HotelsController.update);
HotelsRouter.put("/", HotelsController.update);
HotelsRouter.delete("/:id", HotelsController.destroy);

module.exports = HotelsRouter;
