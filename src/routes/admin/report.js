const express = require("express");
const ReportController = require("../../controllers/AdminController/ReportController.js");
var ReportRouter = express.Router();

/* GET users listing. */
ReportRouter.get("/", ReportController.index);
ReportRouter.post("/create", ReportController.create);
ReportRouter.post("/", ReportController.store);
ReportRouter.get("/:id", ReportController.show);
ReportRouter.post("/:id/edit", ReportController.edit);
ReportRouter.patch("/", ReportController.update);
ReportRouter.put("/", ReportController.update);
ReportRouter.delete("/:id", ReportController.destroy);

module.exports = ReportRouter;
