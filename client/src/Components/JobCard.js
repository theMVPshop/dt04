import React from 'react'
import './JobCard.css'
import FavoriteButton from './FavoriteButton'
import Axios from 'axios'

const JobCard = ({key, job, userId, login, page, setSaved}) => {
  
  const removeFavorite = (job) => {
    console.log(job)
    Axios.delete(`/api/users/saved/`, {
      job: job,
      user_id: userId
    }).then((res) => {
      let results = res.data
      console.log("updatedList: ",results)
      setSaved(results)
      // fetchSavedJobs()
    })
  }

  return (
    <li key={key} className="jobCard">
      <h4>{job.positionTitle}</h4>
      {"\n"}
      Company: {job.companyName} Location: {job.location}
      {"\n"}
      <p>Description: {job.description}</p>
      <div className='jobButtons'>
        <a href={job.link}>Learn More</a>
        {page === 'search' &&
          <FavoriteButton job={job} userId={userId} login={login}/>
        }
        {page === 'profile' && 
          <button onClick={() => {removeFavorite(job)}}>Remove</button>
        }
      </div>
    </li>
  )
}

export default JobCard
