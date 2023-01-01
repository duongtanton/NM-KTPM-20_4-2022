const express = require("express");
const SupportController = require("../../controllers/AdminController/SupportController");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/mail", SupportController.indexMail);
AdminRouter.get("/", SupportController.index);
AdminRouter.post("/create", SupportController.create);
AdminRouter.post("/", SupportController.store);
AdminRouter.get("/:id", SupportController.show);
AdminRouter.post("/:id/edit", SupportController.edit);
AdminRouter.patch("/", SupportController.update);
AdminRouter.put("/", SupportController.update);
AdminRouter.delete("/:id", SupportController.destroy);

module.exports = AdminRouter;
