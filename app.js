let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to database."))
  .catch(() => {
    console.log("Cannot connect to database. Exiting.");
    process.exit();
  });

// Requiere routers
let indexRouter = require("./api/routes/index");
let apiImageUploaderRouter = require("./api/routes/api_imageUploader");
let apiPortfolioRouter = require("./api/routes/api_portfolio");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// ROUTES
app.use("/", indexRouter);
app.use("/image-uploader", apiImageUploaderRouter);
app.use("/api", apiPortfolioRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
