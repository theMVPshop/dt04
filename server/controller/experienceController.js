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
  const { cookies} = req
  let doc = req.body
  const newDoc = Object.assign(doc, {email: cookies.email})
  try {
    
    const userExperience = await Experience.create(newDoc);
    res.status(201).json(userExperience);
  } catch (err) {
    // return handleError(err)
    console.log(newDoc)
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

const viewExperience = async (req, res) => {
  const { cookies} = req
 try {
  const expDoc = await Experience.find({ email: `${cookies.email}` }, function (err, docs) {
    res.status(201).json(docs);
 })
 
 console.log("Fetching User Job Experience");
 } catch (err) {
      // return handleError(err)
      const errors = handleError(err);
      res.status(400).json({ errors });
 }
};

module.exports = { addExperience, viewExperience };
