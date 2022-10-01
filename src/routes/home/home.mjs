import express from "express";
import HomeControlller from "../../controllers/HomeController/HomeControlller.mjs";
var HomeRouter = express.Router();

/* GET home page. */
HomeRouter.get("/", HomeControlller.index);

export default HomeRouter;
