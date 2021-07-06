import React from "react";
import JobResults from "./JobResults"
import "./Landingpage.css"


const LandingPage = (props)=> {
  const {indeedJobs,  
        usaJobs, 
        searchParams, 
        setSearchParams, 
        fetchAllJobs,
        userId} = props

  const handleChange = (e) => {
    const newState = { ...searchParams };
    newState[e.target.name] = e.target.value;
    setSearchParams(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.title === "") {
      alert("Please Enter Job Title");
    } else if (searchParams.location === "") {
      alert("Please Enter Job Location");
    } else {
      // console.log(searchParams)
      fetchAllJobs();
    }
  };

  return (
    <div>
      <div className="jobSearch">
        <form id="landingform" onSubmit={handleSubmit}>
          <div id="what">What</div>
          <input
            id="whatsearch"
            type="text"
            value={searchParams.title}
            name="title"
            onChange={handleChange}
            // placeholder="Search Jobs"
          ></input>
          <div id="where">Where</div>
          <input
            id="wheresearch"
            type="text"
            value={searchParams.location}
            name="location"
            onChange={handleChange}
            // placeholder="Search Location"
          ></input>
          <button id="landingbutton" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="jobs-landing-main-bg">
        <JobResults indeedJobs={indeedJobs} usaJobs={usaJobs} />
      </div>
      <section id="businfo">
        <article id="info">
          OFFICE INFO
          <p>
            Medical Job Search Location 1356 Congress Avenue Austin, Texas 78701
            (512) 343-0001 (office)
          </p>
        </article>
        <article id ="social">
          Social Media
          <p>
            Twitter- @MedicalAssistantJobSearch
            Facebook-FB.com/MedicalAssistantJobSearch Instagram @Medical
            AssistanceJob Search Youtube Youtube.com/MedicalAssistantJobSearch
          </p>
        </article>
      </section>
      <div id="contactform">
      <form >
       <div id="contact">Contact Us!</div>
        <p id="name"> Name </p>
        <input></input>
        <p id="message">Message</p>
        <input></input>
      </form>
      </div>
    </div>
  );
};

export default LandingPage;

//For Later:

//getInterestedJobs = () => {
//   axios.defaults.withCredentials = true;
//   axios.get("http://localhost:3000/get-interested-jobs").then((response) => {
//     if (response.status === 200) {
//       console.log("Interested Jobs", response.data);
//       this.setState({
//         interestedJobs: response.data,
//       });
//     }
//   });
// };

// getSavedJobs = () => {
//   axios.defaults.withCredentials = true;
//   var data = {
//     email: this.props.loginStateStore.email,
//   };
//   axios
//     .get(
//       "http://localhost:3000/saved-jobs/" + this.props.loginStateStore.email
//     )
//     .then((response) => {
//       if (response.status === 200) {
//         console.log("saved jobs: ", response.data);
//         console.log("saved jobs count", response.data.length);
//         this.setState({
//           savedJobs: response.data,
//           savedJobsCount: response.data.length,
//         });
//       }
//     });
// };

// getAppliedJobs = () => {
//   axios.defaults.withCredentials = true;
//   axios
//     .get(
//       "http://localhost:3000/getAppliedJobs/" +
//         this.props.loginStateStore.email
//     )
//     .then((response) => {
//       if (response.status === 200) {
//         console.log("Response applied jobs", response.data);
//         this.setState({
//           appliedJobs: response.data,
//           appliedJobsCount: response.data.length,
//         });
//       }
//     });
// };

// searchResultsHandler = (e) => {
//   var data = {
//     jobTitle: this.state.jobTitle,
//     location: this.state.location,
//   };
//   console.log("Inside search results");

//   this.props.saveSearchFieldToStore(data);
//   this.setState({
//     redirectToJobResultsPage: true,
//   });
// };

// render() {
//   var redirectVar = null;
//   console.log(this.state.redirectToJobResultsPage);

//   if (!this.props.loginStateStore) {
//     redirectVar = <Redirect to="/login" />;
//   }
//   if (this.state.redirectToJobResultsPage == true) {
//     redirectVar = <Redirect to="/jobs/results" />;
//   }

// if (this.state.savedJobs != null) {
//   this.props.saveSavedJobsToStore(this.state.savedJobs);
// }

// if (this.state.appliedJobs != null) {
//   this.props.saveAppliedobsToStore(this.state.appliedJobs);
// }

//  <div className="jobs-landing-bar-container mb-3">
//             <span className="p-3">
//               <Link to="/jobs/saved-jobs">
//                 {this.state.savedJobsCount} Saved Jobs
//               </Link>
//             </span>
//             <span className="pad-3-pc">
//               <Link to="/jobs/applied-jobs">
//                 {this.state.appliedJobsCount} Applied Jobs
//               </Link>
//             </span>
//             <span className="pad-3-pc">Career Interests</span>
//             <span className="pad-3-pc"> Salary</span>
//             <span className="pad-3-pc">Looking for talent?</span>
//             <span className="pad-3-pc">
//               <button className="btn linkedin-post-job" type="submit">
//                 Post a Job
//               </button>
//             </span>
//           </div> */}

//                    <div className="album py-5 bg-light">
//           <div className="container">
//             <div>
//               <p>
//                 <b>Jobs you may be interested in</b>
//               </p>
//         {/* added JobResults component */}
//         // <JobResults />
//           </div>

//             <div className="row">{interestedJobs}</div>
//           </div>
//         </div>
