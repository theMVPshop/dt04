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
  const { user } = req.body;
  let doc = req.body;
  /**const newDoc = Object.assign(doc, {userRef: userRef}) */
  console.log(doc);
  try {
    const userExperience = await Experience.create(doc);
    res.json(userExperience);
  } catch (err) {
    const errors = handleError(err);
    res.sendStatus(400).json({ errors });
  }
};

const viewExperience = async (req, res) => {
  const user = req.body.user
  console.log("backend user: ", req.body)
 try {
   
  const expDoc = await Experience.find({ userRef: user })
  if(expDoc){
    console.log(expDoc)
    res.json(expDoc)
  }
 } catch (err) {
      const errors = handleError(err);
      console.log("the error: ", { errors });
      res.json({ errors });
 }
};

module.exports = { addExperience, viewExperience };
