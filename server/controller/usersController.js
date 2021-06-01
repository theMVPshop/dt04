const User = require("../models/User");

const handelErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  //duplicate email
  if (err.code === 11000) {
    error.email = "that email is already registered";
    return errors;
  }

  //validation errors
  if (err.message.include("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[poperties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.signup_get = async (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = handelErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("user login");
};
