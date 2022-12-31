const CONSTANT = require("./Constant");
const Response = require("./Response");
const Message = require("./Message");

module.exports = { ...CONSTANT, ...Response, ...Message };
