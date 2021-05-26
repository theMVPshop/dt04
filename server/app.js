const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')

const experienceRouter = require ('./routes/experience')
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

//database connection
const dbURI = "mongodb+srv://MVPUser:MVPshop123@mvp.sqwsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbURI, useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then((result) => app.listen(3000)).catch((err) => console.log(err))

app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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