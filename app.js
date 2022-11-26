const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./src/routes/routes");
const handlebars = require("express-handlebars");
const methodOverride = require('method-override');
const { LAYOUT } = require("./src/common");
const { Authen } = require("./src/middleware");
const app = express();
const Helpers = require("./src/common/Helpers")
const multipart = require('parse-multipart-data');
const boundary = "----WebKitFormBoundaryDtbT5UpPj83kllfw";

app.use(methodOverride('_method'))
const hbs = handlebars.create({
  defaultLayout: "users",
  helpers: {
    //create heplers for view here
    ...Helpers
  },
  layoutsDir: "./src/views/layout",
  partialsDir: "./src/views/layout/partials",
  extname: ".hbs",
});
// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");

// app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "src")));
app.use("/assets", Authen, (req, res, next) => {
  const { originalUrl } = req;
  res.sendFile(originalUrl, { root: "src" });
});

app.use((req, res, next) => {
  const { originalUrl } = req;
  const layout = originalUrl.match(/^\/admin/) ? LAYOUT.ADIM : LAYOUT.USERS;
  res.locals.layout = layout;
  next();
})

routes(app);

// chưa handle việc 404, nếu 404 quay về index
// // catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// // error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("./users/404.hbs");
});

module.exports = app;
