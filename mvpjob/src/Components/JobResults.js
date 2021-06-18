import React from "react"


const JobResults = (props) => {
  const {indeedJobs, usaJobs} = props


  return (
    <div>
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
