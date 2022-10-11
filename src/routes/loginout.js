const express = require("express");
const LogInOutController = require("../controllers/LogInOutController.js");
var LogInOut = express.Router();
/* GET users listing. */
LogInOut.get("/", LogInOutController.index); //view login 

LogInOut.post("/create", LogInOutController.create); // create user 

LogInOut.post("/", LogInOutController.store);// login post username password

// LogInOut.delete("/:id", LogInOutController.destroy); //logout
LogInOut.get("/out", LogInOutController.destroy); //logout


module.exports = LogInOut;
