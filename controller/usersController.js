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
    console.log(user)
    res.json({ userRef: user._id });
  } catch (err) {
    console.log(" this is the err", err)
    const errors = handleErrors(err);
    res.sendStatus(400, errors);
  }
};

module.exports.login_get = async (req, res) => {
  try{
    console.log("backend user get success")
  }
  catch (err) {
    console.log("backend user get failure: ", err)
  }
};

module.exports.login_post = async (req, res) => {
  const { email } = req.body;
  console.log("userController req.body: ", req.body)
  console.log("userController email: ", email)
  try {
    const user = await User.findOne({ email });
    const userId = user._id
    console.log("userController user: ", user, 'userController userID :', userId)
    if (user) {
      res.json({ userRef: userId})
    }
  } catch (err) {
    console.log("this is the err", err)
    const errors = handleErrors(err);
    res.sendStatus(400).json({ errors });
  }
};

module.exports.login_put = async (req, res) => {};
