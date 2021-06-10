const Experience = require("../models/Experience");

// const handleError = (res, err) => {
//   console.error('Error: ', {err})
//   return res.status(500).send('An unexpected error has occured.')
// }

const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  //validation errors
  if (err.message.includes("experience validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const addExperience = async (req, res) => {
  try {
    const cookies = req.cookies
    const userExperience = await Experience.create(req.body, cookies.email);
    res.status(201).json(userExperience);
  } catch (err) {
    // return handleError(err)
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

const viewExperience = async (req, res) => {
  const cookies = req.cookies
  const expDoc = await Experience.find({ email: `${cookies.email}` }, function (err, docs) {
     res.send(docs)
  })
  
  console.log("Fetching User Job Experience");
  res.send("Getting Job Experience");
  // res.render('Job Experience')
};

module.exports = { addExperience, viewExperience };
