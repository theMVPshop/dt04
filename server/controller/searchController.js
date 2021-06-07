const fetch = require("node-fetch");

const handleError = (res, err) => {
  console.error('Error: ', {err})
  return res.status(500).send('An unexpected error has occured.', err)
}

//USA JOBS CONNECTION INFO
var host = 'data.usajobs.gov';  
var userAgent = 'clairesheek@gmail.com';  
var authKey = '+B7adBgiL5PUqf8xnx64GZjI1Xldz+HS0s/xZrYqrCw='; 



const fetchResults = async (req, res) => {
  const position = "medical+assistant" //req.body.position
  const positionUSA =  "medical%20assistant"
  const location = "austin+texas" //req.body.location
  const locationUSA = "austin%20tx" //req.body.location


  const adzunaURL = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d8054f18&app_key=91e9f06279e878970e11dee09fd5f833&results_per_page=20&what=${position}&where=${location}&content-type=application/json`
  const usaJobsURL = `https://data.usajobs.gov/api/Search?PositionTitle=${positionUSA}&LocationName=${locationUSA}`

  Promise.all([
	fetch(adzunaURL),
	fetch(usaJobsURL, {            
    method: 'GET',      
    headers: {          
        "Host": host,          
        "User-Agent": userAgent,          
        "Authorization-Key": authKey      
    }})
  ])
  // .then(response => response.json())
  .then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }))
  })
  .then(data => res.send(data))

};


module.exports = { fetchResults };


//MULTIPLE 3rd PARTY API CALL ATTEMPT #1
// Promise.all([
// 	fetch('https://jsonplaceholder.typicode.com/posts'),
// 	fetch('https://jsonplaceholder.typicode.com/users')
// ]);
