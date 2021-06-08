const fetch = require("node-fetch");

const handleError = (res, err) => {
  console.error('Error: ', {err})
  return res.status(500).send('An unexpected error has occured.', err)
}

//Indeed Postings:
var indeedData = {}

//USA JOBS CONNECTION INFO
var host = 'data.usajobs.gov';  
var userAgent = 'clairesheek@gmail.com';  
var authKey = '+B7adBgiL5PUqf8xnx64GZjI1Xldz+HS0s/xZrYqrCw='; 


//Controller function to call both APIs
const fetchResults = async (req, res) => {
  // const position = "medical+assistant" //req.body.position
  const positionUSA =  "medical%20assistant"
  // const location = "austin+texas" //req.body.location
  const locationUSA = "austin%20tx" //req.body.location


  // const adzunaURL = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d8054f18&app_key=91e9f06279e878970e11dee09fd5f833&results_per_page=20&what=${position}&where=${location}&content-type=application/json`
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

var JQUERYconvertRSS;

(function ($) {
	JQUERYconvertRSS = function (opt) {
		var def = $.extend(
			{
				MaxCount: 25,
				ShowDesc: true,
				ShowPubDate: true,
				DescCharacterLimit: 0,
				TitleLinkTarget: "_blank",
				DateFormat: "",
				DateFormatLang: "en",
			},
			opt
		);

		var id = $(this).attr("id"),
			s = "",
			dt;
		$("#" + id).empty();
		if (def.FeedUrl == undefined) return;
		$.ajax({
			url:
				"https://feed.jquery-plugins.net/load?url=" +
				encodeURIComponent(def.FeedUrl) +
				"&maxCount=" +
				def.MaxCount +
				"&dateCulture=" +
				def.DateFormatLang +
				"&dateFormat=" +
				def.DateFormat,
			dataType: "json",
			success: function (result) {
				$("#" + id).empty();
				if (result.data == null) return;
//////////////// data is returned
         console.log(result.data);
        
			},
		});
	};
})(jQuery);

const covertToJSON = () => {
  JQUERYconvertRSS({
        FeedUrl:"https://rss.indeed.com/rss?q=medical+assistant&l=Austin,+TX&jt=parttime",
        MaxCount: 120,
      })
}


module.exports = { fetchResults };


