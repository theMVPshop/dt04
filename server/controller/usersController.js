const User = require("../models/User");

//get email to store in cookies and tie it when resumes are connected. 

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code, err);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return err;
}

module.exports.signup_get = async (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    const errors = handelErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_get = async (req, res) => {
  const { email, password } = req.body;
  try {
  const userDoc = await User.find({ email: email }, function (err, docs) {
    if(docs){
      console.log(docs)
    res.cookie('email', email, { httpOnly: true })
    res.send(200)
    } 
    console.log(err)
 })
} catch (err) {
   // return handleError(err)
   const errors = handleError(err);
   res.status(400).json({ errors });
 }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("user login");
};

module.exports.login_put = async (req, res) => {

};

