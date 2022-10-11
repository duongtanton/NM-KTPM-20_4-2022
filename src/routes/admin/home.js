const express = require("express");
const AdminController = require("../../controllers/AdminController/AdminController.js");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", AdminController.index);
AdminRouter.post("/create", AdminController.create);
AdminRouter.post("/", AdminController.store);
AdminRouter.get("/:id", AdminController.show);
AdminRouter.post("/:id/edit", AdminController.edit);
AdminRouter.patch("/", AdminController.update);
AdminRouter.put("/", AdminController.update);
AdminRouter.delete("/:id", AdminController.destroy);

module.exports = AdminRouter;
