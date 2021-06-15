import React, { useState } from "react"
import jQuery from 'jquery'
import axios from 'axios'

const JobResults = () => {
  const [indeedJobs, setIndeed] = useState([])
  const [usaJobs, setUSA] = useState([])

  var JQUERYconvertRSS;
  var normalizedJobs = [];

  // Converts Indeed RSS feed to JSON
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

      var id = $(this).attr("id");
      $("#" + id).empty();
      if (def.FeedUrl === undefined) return;
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
          if (result.data === null) return;
          normalizeIndeedResults(result.data) //cleans up parsed data
          setIndeed(normalizedJobs); //sets results to state
        },
      });
    };
  })(jQuery);

  const convertToJSON = () => {
    JQUERYconvertRSS({
          FeedUrl:"https://rss.indeed.com/rss?q=medical+assistant&l=Austin,+TX&jt=parttime",
          MaxCount: 120,
        })
  }

  
  const normalizeIndeedResults = (array) => {
    array.forEach( function (job) { 
        
      //update job title
        job.title = job.title.split("-"); //seperates the job title into job title, company name and location.
        if (job.title.length > 3) {
          job.title.splice(1,1) //Some job titles had an extra category in this position. This removes it if it does. 
        }
        //reassigns to correct label
        job.positionTitle = job.title[0]
        job.companyName = job.title[1]
        job.location = job.title[2]

      //remove unnecessary info from the parsed job description
        job.description = job.description.split("<br>"); 
        job.description = job.description.shift()


      //pushes to new array with edited job info
      normalizedJobs.push(job)
    })
    console.log("normalized indeed jobs", normalizedJobs)
    return normalizedJobs
  }

  //fetch USAJobs
  const fetchUSAJobs = async () => {
    axios.get('http://localhost:5000/search')
    .then((res) => {
      let tempArray = []
      let results = res.data
      results.forEach( function (job) { 
        job = job.MatchedObjectDescriptor

      // //pushes to new array with edited job info
      tempArray.push(job)
    })
    setUSA(tempArray)
    console.log("usa jobs", usaJobs)

    }, (error) => {
      console.log(error);
    });
  }



  const fetchAllJobs = () => {
    // Promise.all([
      convertToJSON()
      fetchUSAJobs()
      // ])
  }

  return (
    <div>
      <button onClick={fetchAllJobs}>Load Jobs</button>
      <ul className="gallery">
        {indeedJobs && indeedJobs.map((job, idx) => (
          <li key={idx}>
              <h4>{job.positionTitle}</h4>{"\n"}
              Company: {job.companyName} Location: {job.location}{"\n"}
              <p>Description: {job.description}</p>
              <a href={job.link}>Learn More</a>
          </li>
        ))}
          {usaJobs && usaJobs.map((job, idx) => (
          <li key={idx}>
              <h4>{job.PositionTitle}</h4>{"\n"}
              Company: {job.OrganizationName} Location: {job.PositionLocationDisplay}{"\n"}
              <p>Description: {job.UserArea.Details.JobSummary}</p>
              <a href={job.PositionURI}>Learn More</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobResults
