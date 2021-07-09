import React, {useState, useEffect} from 'react'
import Login from './Login'
import ResumeView from './ResumeView'
import Axios from 'axios'
import JobCard from './JobCard'

const Profile = (props) => {
  const userId = props.user
  console.log("profile user: ", props.user)
  const [savedJobs, setSaved] = useState()
  const [toggle, setToggle] = useState(false)

  const fetchSavedJobs = () => {
    Axios.get(`/api/users/saved/${userId}`)
    .then((res) => {
      let results = res.data
      setSaved(results)
    }, (error) => {
      console.log("Error Fetching Saved Jobs: ", error);
    });
  }

  const handleToggle = () => {
    setToggle(!toggle)
    fetchSavedJobs()
  }

  // const removeFavorite = (job) => {
  //   console.log(job)
  //   Axios.delete(`/api/users/saved/`, {
  //     job: job,
  //     user_id: userId
  //   }).then((res) => {
  //     let results = res.data
  //     console.log("updatedList: ",results)
  //     setSaved(results)
  //     // fetchSavedJobs()
  //   })
  // }

  useEffect(() => {
    console.log(savedJobs)
    // fetchSavedJobs()
  }, [savedJobs])

  return (
    <div>
      {props.user ? (
        <div>
          <h2> Saved Jobs 
          </h2>
          {toggle === true ? (
            <ul className="gallery">
              <button onClick={handleToggle}>Hide Saved Jobs</button>
              {savedJobs && savedJobs.map((job, idx) => (
                <JobCard 
                  key={idx}
                  job={job}
                  userId={userId}
                  page={'profile'}
                  setSaved={setSaved}
                />
              ))}
            </ul>
    
          ) : (
          <button onClick  ={handleToggle}>View Saved Jobs</button>
          )}
    
          <h2>Build a Resume:</h2>
          <ResumeView />
          
        </div>
      ) : (
        <div>
          <h4>Whoops! You must be signed in to view this page!</h4>
          <Login /> 
        </div>
      )}
    </div>
  )
}

export default Profile
