const express = require("express");
const { EmployeeController } = require("../../controllers/AdminController");
const UploadFile = require("../../middleware/UploadFile");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", EmployeeController.index);
AdminRouter.post("/create", UploadFile.single("admin", "avatar"), EmployeeController.create);
AdminRouter.post("/", EmployeeController.store);
AdminRouter.get("/:id", EmployeeController.show);
AdminRouter.post("/:id/edit", UploadFile.single("admin", "avatar"), EmployeeController.edit);
AdminRouter.patch("/", EmployeeController.update);
AdminRouter.put("/", EmployeeController.update);
AdminRouter.delete("/:id", EmployeeController.destroy);
AdminRouter.delete("/", EmployeeController.destroyMultiple);

module.exports = AdminRouter;