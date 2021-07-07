import React from "react"
import FavoriteButton from './FavoriteButton'

const JobResults = (props) => {
  const {indeedJobs, usaJobs, userId, login} = props


  return (
    <div>
      <ul className="gallery">
        {indeedJobs &&
          indeedJobs.map((job, idx) => (
            <li key={idx}>
              <h4>{job.positionTitle}</h4>
              {"\n"}
              Company: {job.companyName} Location: {job.location}
              {"\n"}
              <p>Description: {job.description}</p>
              <a href={job.link}>Learn More</a>
              {login ? (
                <FavoriteButton job={job} userId={userId}/>
              ) : (
                <></>
              )}
          </li>
        ))}
          {usaJobs && usaJobs.map((job, idx) => (
          <li key={idx}>
              <h4>{job.PositionTitle}</h4>{"\n"}
              Company: {job.OrganizationName} Location: {job.PositionLocationDisplay}{"\n"}
              <p>Description: {job.UserArea.Details.JobSummary}</p>
              <a href={job.PositionURI}>Learn More</a>
              <FavoriteButton job={job} userId={userId}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobResults;
