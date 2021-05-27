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
const port = process.env.PORT || 3000

//database connection Option 1

const dbURI = "mongodb+srv://MVPUser:MVPshop123@mvp.sqwsb.mongodb.net/test_db?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then((result) => app.listen(port)).catch((err) => console.log(err))

//database connection Option 2
// var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/dbName";
// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   family: 4 
// };
// mongoose.connect(MONGODB_URI,options)


app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

app.get('/', (req, res) => {
  res.send('Welcome to our server')
})

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
//   res.render("error");
// });


module.exports = app;
