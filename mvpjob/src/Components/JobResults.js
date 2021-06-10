import React, { useState } from "react"
import jQuery from 'jquery'

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
          normalizeData(result.data) //cleans up parsed data
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
        console.log("INDEED:", indeedJobs )
  }

  
  const normalizeData = (array) => {
    array.forEach( function (job) { 
      job.title = job.title.split("-"); //seperates the job title into job title, company name and location.
      if (job.title.length > 3) {
        job.title.splice(1,1) //Some job titles had an extra category in this position. This removes it if it does. 
      }
      //reassigns to correct label
      job.positionTitle = job.title[0]
      job.companyName = job.title[1]
      job.location = job.title[2]

      //pushes to new array with edited job info
      normalizedJobs.push(job)
    })
    console.log(normalizedJobs)
    return normalizedJobs
  }

  return (
    <div>
      <button onClick={convertToJSON}>Load Jobs</button>
      <ul className="gallery">
      {indeedJobs && indeedJobs.map((job, idx) => (
        <li key={idx}>
            <h4>{job.positionTitle}</h4>{"\n"}
            {job.companyName} {job.location}{"\n"}
            <p>{job.description}</p>
            <a href={job.link}>Learn More</a>
        </li>
      ))}
    </ul>
      
    </div>
  )
}

export default JobResults
