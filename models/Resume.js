const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
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
    userRef: {
      type: String,
      required: true,
    },
  });

const Resume = mongoose.model("Resume", experienceSchema);

module.exports = Experience;