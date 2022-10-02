const express = require("express");
const UserControlller = require("../../controllers/UsersController/UsersControlller.js");
var UsersRouter = express.Router();

/* GET users listing. */
UsersRouter.get("/", UserControlller.index);
UsersRouter.post("/create", UserControlller.create);
UsersRouter.post("/", UserControlller.store);
UsersRouter.get("/:id", UserControlller.show);
UsersRouter.post("/:id/edit", UserControlller.edit);

UsersRouter.patch("/", UserControlller.update);
UsersRouter.put("/", UserControlller.update);

UsersRouter.delete("/:id", UserControlller.destroy);

module.exports = UsersRouter;
