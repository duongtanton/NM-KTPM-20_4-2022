const HomeRouter = require("./home/home.js");
const UserRouter = require("./users/users.js");

module.exports = function routes(app) {
  app.use("/", HomeRouter);
  app.use("/users", UserRouter);
};
