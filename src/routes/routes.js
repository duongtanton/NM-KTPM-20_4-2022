const { ROLES } = require("../common");
const { Authen, Author } = require("../middleware");
const { DataCommon } = require("../middleware/DataCommon");
const AdminRouter = require("./admin");
const UserRouter = require("./users");

module.exports = function routes(app) {
  app.use("/admin", AdminRouter);
  app.use("/", DataCommon, UserRouter)
};