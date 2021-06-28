const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const experienceRouter = require("./routes/experience");
const usersRouter = require("./routes/users");
const searchRouter = require("./routes/search");

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
app.use(cors({ origin: 'https://medical-job-search.herokuapp.com' , credentials :  true}));
app.use(cors({ origin: 'https://localhost:3000' , credentials :  true}));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/client/build")));


app.use("/api/users", usersRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/search", searchRouter)


// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.get("api/", (req, res) => {

  res.send("Welcome to our server");
});



module.exports = app;
