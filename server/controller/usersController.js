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

const maxAge = 3 * 24 * 60 * 60;

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
    res.cookie("email", email, { httpOnly: true, maxAge: maxAge * 1000 });
    res.sendStatus(201).json({ user: user.email });
  } catch (err) {
    console.log(" this is the err", err)
    const errors = handleErrors(err);
    res.sendStatus(400).json({ errors });
  }
};

module.exports.login_get = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).catch((error) => {
      console.error(error);
    });
    console.log(user)
    if (user) {
      res.sendStatus(200).json({ userRef: user._id });
    }
  } catch (err) {
    console.log(" this is the err", err)
    const errors = handleErrors(err);
    res.sendStatus(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
 
};

module.exports.login_put = async (req, res) => {};
