const express = require("express");
const LogInOutController = require("../../controllers/UsersController/LogInOutController.js");
var LogInOut = express.Router();
/* GET users listing. */
LogInOut.get("/", LogInOutController.index);
LogInOut.post("/create", LogInOutController.create);
LogInOut.post("/", LogInOutController.store);
LogInOut.get("/:id", LogInOutController.show);
LogInOut.post("/:id/edit", LogInOutController.edit);

LogInOut.patch("/", LogInOutController.update);
LogInOut.put("/", LogInOutController.update);

LogInOut.delete("/:id", LogInOutController.destroy);

module.exports = LogInOut;
