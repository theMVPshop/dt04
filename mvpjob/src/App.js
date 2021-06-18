import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Resume from "./Components/Resume";
import Navigation from "./Components/Navigation";
import "./App.css";
import PopUp from "./Components/PopUp";
import jQuery from 'jquery'
import axios from 'axios'



const App = () => {
  const [indeedJobs, setIndeed] = useState([])
  const [usaJobs, setUSA] = useState([])
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: ""
  });
  const [jobLocation, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");

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

  const fetchIndeedAsJson = () => {
    let searchArray = []

      //create search params string
      if(searchParams.title){
        searchArray.push(`q=${searchParams.title}`)
      }
      if(searchParams.location){
        searchArray.push(`l=${searchParams.location}`)
      }
      if (searchArray.length > 1) {
        searchArray = searchArray.join('&')
        // console.log(searchArray)
      }
  
    JQUERYconvertRSS({
          FeedUrl:`https://rss.indeed.com/rss?${searchArray}`,
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
    // console.log("normalized indeed jobs", normalizedJobs)
    return normalizedJobs
  }

  //fetch USAJobs
  const fetchUSAJobs = async () => {
    let tempArray = []
    let searchArray = []

      //create search params string
      if(searchParams.title){
        searchArray.push(`PositionTitle=${searchParams.title}`)
      }
      if(searchParams.location){
        searchArray.push(`LocationName=${searchParams.location}`)
      }
      if (searchArray.length > 1) {
        searchArray = searchArray.join('&')
        console.log("USA Search Array", searchArray)
      }

    axios.get(`http://localhost:5000/search/${searchArray}`)
    .then((res) => {
      let results = res.data
      results.forEach( function (job) { 
        job = job.MatchedObjectDescriptor    // sets results to object with needed data

      tempArray.push(job)      //pushes edited job info to temporary array
    })
    //sets the result to State
    setUSA(tempArray)

    }, (error) => {
      console.log(error);
    });
  }


  const fetchAllJobs = () => {
      setIndeed([])
      setUSA([])
      setSearchParams({title: jobTitle, location: jobLocation})

      fetchIndeedAsJson()
      fetchUSAJobs()
      console.log("Indeed Jobs", indeedJobs)
      console.log("USA Jobs", usaJobs)
  }


  return (
    <Fragment>
      <Navigation />
      <Router>
        <Switch>
 aboutjs
          <Route exact path="/landingpage" component={LandingPage}></Route>

          <Route exact path="/" render={(props) => 
            <LandingPage 
              indeedJobs={indeedJobs} 
              usaJobs={usaJobs} 
              searchParams={searchParams} 
              setSearchParams={setSearchParams}
              jobTitle={jobTitle} 
              setJobTitle={setJobTitle}
              jobLocation={jobLocation} 
              setLocation={setLocation}
              fetchAllJobs={fetchAllJobs}/>}
            />
 main
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>      
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/resume" component={Resume}></Route>
          <Route exact path="/popup" component={PopUp}></Route>

        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
