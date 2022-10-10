const { authen } = require("../middleware/Authentication");
const AdminRouter = require("./admin");
const UserRouter = require("./users");

module.exports = function routes(app) {
  app.use("/admin", AdminRouter);
  app.use("/", authen, UserRouter)
};
