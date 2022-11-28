const express = require("express");
const { PromotionController } = require("../../controllers/AdminController");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", PromotionController.index);
AdminRouter.post("/create", PromotionController.create);
AdminRouter.post("/", PromotionController.store);
AdminRouter.get("/:id", PromotionController.show);
AdminRouter.post("/:id/edit", PromotionController.edit);
AdminRouter.patch("/", PromotionController.update);
AdminRouter.put("/", PromotionController.update);
AdminRouter.delete("/:id", PromotionController.destroy);
AdminRouter.delete("/", PromotionController.destroyMultiple);

module.exports = AdminRouter;