const express = require("express");
const CartController = require("../../controllers/UsersController/CartController");
const UploadFile = require("../../middleware/UploadFile.js");
var CartRouter = express.Router();
/* GET users listing. */
CartRouter.get("/", CartController.index);
CartRouter.post("/create", CartController.create);
CartRouter.post("/", UploadFile.multiple("user/room", "file"), CartController.store);
CartRouter.get("/:id", CartController.show);
CartRouter.post("/:id/edit", CartController.edit);

CartRouter.patch("/", CartController.update);
CartRouter.put("/", CartController.update);

CartRouter.delete("/:id", CartController.destroy);

module.exports = CartRouter;
