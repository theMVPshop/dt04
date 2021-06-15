const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  phoneNumber: {
    type: Number,
  },
  zipcode: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  
  //create a timestamp when they first create a user and anytime they log in.
}, { timestamps: true });

const User = mongoose.model("user", userSchema);

module.exports = User;
