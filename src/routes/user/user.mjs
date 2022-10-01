import express from "express";
import UserControlller from "../../controllers/UserController/UserControlller.mjs";
var UserRouter = express.Router();

/* GET users listing. */
UserRouter.get("/user", UserControlller.index);

export default UserRouter;
