const express = require("express");
const {SearchController} = require("../../controllers/UsersController");
const { DataCommon } = require("../../middleware/DataCommon");
var SearchRouter = express.Router();

/* GET users listing. */
SearchRouter.post("/", SearchController.show);
SearchRouter.get("/", SearchController.show);

module.exports = SearchRouter;