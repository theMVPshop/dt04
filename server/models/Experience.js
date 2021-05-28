const mongoose = require('mongoose')

const experienceSchema = new  mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please enter Company Name'],
    },
    position: {
        type:String,
        required: [true, 'Please enter your position title']
    },
    startDate: {
      type:Date,
      required: [true, 'Please enter your start date']
    },
    endDate: {
      type:Date,
      required: [true, 'Please enter your Position']
    },
    description: {
      type:String,
      required: [true, 'Please enter your job responsibilities and skills']
    },
})

const Experience = mongoose.model('experience', experienceSchema)

module.exports = Experience;
