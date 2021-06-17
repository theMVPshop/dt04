const User = require("../models/User");

//get email to store in cookies and tie it when resumes are connected.

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code, err);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return err;
};

module.exports.signup_get = async (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    zipcode,
    city,
    state,
  } = req.body;
  console.log(
    "in Post request ",
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    zipcode,
    city,
    state
  );
  try {
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      zipcode,
      city,
      state,
    });
    console.log(user)
    res.cookie("email", email, { httpOnly: true });
    res.send(201).json({ user: user.email });
  } catch (err) {
    //const errors = handelErrors(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_get = async (req, res) => {};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log("in Post request ", email, password);
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.cookie("email", email, { httpOnly: true });
      res.send(200).json({ user: user.email });
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_put = async (req, res) => {};
