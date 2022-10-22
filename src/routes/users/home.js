const express = require("express");
const UserController = require("../../controllers/UsersController/UsersController.js");
const UploadFile = require("../../middleware/UploadFile.js");
var HomeRouter = express.Router();
/* GET users listing. */
HomeRouter.get("/", UserController.index);
// HomeRouter.post("/create", UserController.create);
// HomeRouter.post("/", UploadFile.multiple("user/room", "file"), UserController.store);
// HomeRouter.get("/:id", UserController.show);
// HomeRouter.post("/:id/edit", UserController.edit);

// HomeRouter.patch("/", UserController.update);
// HomeRouter.put("/", UserController.update);

// HomeRouter.delete("/:id", UserController.destroy);

module.exports = HomeRouter;
