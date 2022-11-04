const express = require("express");
const EmployeeTypeController = require("../../controllers/AdminController/EmployeeTypeController.js");
var EmployeeTypeRouter = express.Router();

/* GET users listing. */
EmployeeTypeRouter.get("/create", EmployeeTypeController.display);
EmployeeTypeRouter.get("/", EmployeeTypeController.index);
EmployeeTypeRouter.post("/create", EmployeeTypeController.create);
EmployeeTypeRouter.post("/", EmployeeTypeController.store);
EmployeeTypeRouter.get("/:id", EmployeeTypeController.show);
EmployeeTypeRouter.get("/:id/edit", EmployeeTypeController.edit);
EmployeeTypeRouter.patch("/", EmployeeTypeController.update);
EmployeeTypeRouter.put("/", EmployeeTypeController.update);
EmployeeTypeRouter.delete("/:id", EmployeeTypeController.destroy);

module.exports = EmployeeTypeRouter;