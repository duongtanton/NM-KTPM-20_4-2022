const { ROLES } = require("../common");
const { Authen, Author } = require("../middleware");
const { AuthorVerify } = require("../middleware/Authorization");
const { DataCommon } = require("../middleware/DataCommon");
const AdminRouter = require("./admin");
const UserRouter = require("./users");

module.exports = function routes(app) {
  app.use("/admin", Authen, DataCommon, Author([ROLES.ENTERPRISE, ROLES.AMDIN, ROLES.STAFF]), AdminRouter);
  // app.use("/admin", Authen, DataCommon, Author([ROLES.ENTERPRISE, ROLES.AMDIN, ROLES.STAFF]), AuthorVerify, AdminRouter);
  app.use("/", DataCommon, UserRouter)
};