import React from "react"
import JobCard from './JobCard'





const JobResults = (props) => {
  const {indeedJobs, usaJobs, userId, login} = props
  console.log("job results user: ", userId)

  return (
    <div>
      <ul className="results-gallery">
        {indeedJobs &&
          indeedJobs.map((job, idx) => (
            <JobCard 
              key={idx}
              job={job}
              userId={userId}
              login={login}
              page={'search'}
            />
        ))}
          {usaJobs && usaJobs.map((job, idx) => (
            <JobCard 
              key={idx}
              job={job}
              userId={userId}
              login={login}
              page={'search'}
            />
        ))}
      </ul>
    </div>
  );
};

export default JobResults;
