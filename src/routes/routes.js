const { ROLES } = require("../common");
const { authen } = require("../middleware/Authentication");
const { author } = require("../middleware/Authorization");
const AdminRouter = require("./admin");
const UserRouter = require("./users");

module.exports = function routes(app) {
  app.use("/admin", author(ROLES.AMDIN), AdminRouter);
  app.use("/", UserRouter)
};
