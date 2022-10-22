const express = require("express");
const RoomTypeController = require("../../controllers/AdminController/RoomType");
var AdminRouter = express.Router();

/* GET users listing. */
AdminRouter.get("/", RoomTypeController.index);
AdminRouter.get("/create",(req,res) =>{
    res.render("./admin/add-type", {layout: "admin"});
})
AdminRouter.post("/create", RoomTypeController.create);
AdminRouter.post("/", RoomTypeController.store);
AdminRouter.get("/:id", RoomTypeController.show);
AdminRouter.get("/:id/edit", (req, res) => {
    res.render("./admin/edit-type", {layout: "admin"});
});
AdminRouter.post("/:id/edit", RoomTypeController.edit);
AdminRouter.patch("/", RoomTypeController.update);
AdminRouter.put("/", RoomTypeController.update);
AdminRouter.delete("/:id", RoomTypeController.destroy);

module.exports = AdminRouter;
