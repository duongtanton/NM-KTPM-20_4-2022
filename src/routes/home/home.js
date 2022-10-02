const express = require("express");
const HomeControlller = require("../../controllers/HomeController/HomeControlller.js");
var HomeRouter = express.Router();

/* GET home page. */
HomeRouter.get("/", HomeControlller.index);

module.exports = HomeRouter;
