import express from "express";
import UserControlller from "../../controllers/UsersController/UsersControlller.mjs";
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

export default UsersRouter;
