import React, {useState, useEffect} from 'react'
import Login from './Login'
import ResumeView from './ResumeView'
import axios from 'axios'
import SignUp from './SignUp'

const Profile = (props) => {
  const userId = props.user
  const [savedJobs, setSaved] = useState()
  const [toggle, setToggle] = useState(false)

  const fetchSavedJobs = () => {
    axios.get(`/api/users/save/${userId}`)
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
                <li key={idx}>
                    <h4>{job.positionTitle}</h4>{"\n"}
                    Company: {job.companyName} Location: {job.location}{"\n"}
                    <p>Description: {job.description}</p>
                    <a href={job.link}>Learn More</a>
                    {/* <FavoriteButton job={job} userId={userId}/> */}
                </li>
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
