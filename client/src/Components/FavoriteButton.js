import React from 'react'
import Axios from "axios"
import SignUp from './SignUp'

const FavoriteButton = (props) => {
  console.log(props.userId)

  const saveFavorite = (e) => {
    e.preventDefault()
    console.log("Saved To: ", props.userId, "job: ", props.job)
    Axios.post(`/api/users/saved/`, {
      job: props.job, 
      user_id: props.userId
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      {props.login && 
        <button onClick={saveFavorite}>Save to Favorites</button>
      }
      {!props.login && 
        <button onClick={() => {<SignUp />}}>Signup to Save</button>
      }
    </div>
  )
}

export default FavoriteButton
