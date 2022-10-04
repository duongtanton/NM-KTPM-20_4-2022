const express = require("express");
const UserController = require("../../controllers/UsersController/UsersController.js");
var UsersRouter = express.Router();
/* GET users listing. */
UsersRouter.get("/", UserController.index);
UsersRouter.post("/create", UserController.create);
UsersRouter.post("/", UserController.store);
UsersRouter.get("/:id", UserController.show);
UsersRouter.post("/:id/edit", UserController.edit);

UsersRouter.patch("/", UserController.update);
UsersRouter.put("/", UserController.update);

UsersRouter.delete("/:id", UserController.destroy);

module.exports = UsersRouter;
