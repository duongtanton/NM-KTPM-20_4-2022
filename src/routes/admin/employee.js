const express = require("express");
const EmployeeController = require("../../controllers/AdminController/EmployeeController.js");
const UploadFile = require("../../middleware/UploadFile.js");
var EmployeeRouter = express.Router();

/* GET users listing. */
EmployeeRouter.get("/", EmployeeController.index);
EmployeeRouter.post("/create", EmployeeController.create);
EmployeeRouter.post("/", EmployeeController.store);
EmployeeRouter.get("/:id", EmployeeController.show);
EmployeeRouter.post("/:id/edit", EmployeeController.edit);
EmployeeRouter.patch("/", EmployeeController.update);
EmployeeRouter.put("/", EmployeeController.update);
EmployeeRouter.delete("/:id", EmployeeController.destroy);

module.exports = EmployeeRouter;
