const mongoose = require("mongoose");
const { isEmail } = require("validator");


const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please enter Company Name"],
  },
  position: {
    type: String,
    required: [true, "Please enter your position title"],
  },
  startDate: {
    type: String,
    required: [true, "Please enter your start date: MM/YYY"],
  },
  endDate: {
    type: String,
    required: [true, "Please enter your end date: MM/YYY"],
  },
  description: {
    type: String,
    required: [true, "Please enter your job responsibilities and skills"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
});

const Experience = mongoose.model("experience", experienceSchema);

module.exports = Experience;
