const express = require("express");
const { ProfilesController } = require("../../controllers/UsersController");
const UploadFile = require("../../middleware/UploadFile.js");
var ProfilesRouter = express.Router();
/* GET users listing. */
ProfilesRouter.get("/", ProfilesController.index);

// ProfilesRouter.post("/create", ProfilesController.create);
// ProfilesRouter.post("/", UploadFile.multiple("user/profiles", "file"), ProfilesController.store);
ProfilesRouter.get("/edit", ProfilesController.show);
// ProfilesRouter.post("/:id/edit", ProfilesController.edit);

ProfilesRouter.patch("/", ProfilesController.update);
ProfilesRouter.patch("/api",UploadFile.single("users", "avatar"), ProfilesController.apiUpdate);
// ProfilesRouter.put("/", ProfilesController.update);

// ProfilesRouter.delete("/:id", ProfilesController.destroy);

module.exports = ProfilesRouter;
