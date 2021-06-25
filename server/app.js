const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const experienceRouter = require("./routes/experience");
const usersRouter = require("./routes/users");
const searchRouter = require("./routes/search");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;


//establishing database connection
const dbURI =
  "mongodb+srv://MVPUser:MVPshop123@mvp.sqwsb.mongodb.net/test_db?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000' , credentials :  true}));
// app.use(cors())
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Origin: *');
//   res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
//   res.header('Access-Control-Allow-res.Headers: *');
//   res.header('Access-Control-Max-Age: 1728000');
//   res.header("Content-Length: 0");
//   res.header("Content-Type: text/plain"); 
//   next();
// });


app.use("/api/users", usersRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/search", searchRouter)

app.get("api/", (req, res) => {
  res.send("Welcome to our server");
});



// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../mvpjob/build")));

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../mvpjob/build/index.html"));
});

module.exports = app;
