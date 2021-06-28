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
    res.sendStatus(201).json(userExperience);
  } catch (err) {
    const errors = handleError(err);
    res.sendStatus(400).json({ errors });
  }
};

const viewExperience = async (req, res) => {
  const { cookies} = req
  const email = cookies.email
 try {
  const expDoc = await Experience.find({ email })
  res.sendStatus(200).json(expDoc)
 
 console.log("Fetching User Job Experience");
 } catch (err) {
      
      console.log(expDoc)
      const errors = handleError(err);
      res.sendStatus(400).json({ errors });
 }
};

module.exports = { addExperience, viewExperience };
