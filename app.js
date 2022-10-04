var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const routes = require("./src/routes/routes");
const handlebars = require("express-handlebars");

var app = express();
var hbs = handlebars.create({
  defaultLayout: "users",
  helpers: {
    //create heplers for view here
  },
  layoutsDir: "./src/views/layout",
  partialsDir: "./src/views/layout/partials",
  extname: ".hbs",
});
// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "src/public")));

routes(app);

// chưa handle việc 404, nếu 404 quay về index
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("./users/404.hbs");
// });

module.exports = app;
