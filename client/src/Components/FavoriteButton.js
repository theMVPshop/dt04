import React from 'react'
import Axios from "axios"

const FavoriteButton = (props) => {

  const saveFavorite = (e) => {
    e.preventDefault()
    console.log("job: ", props.job)
    console.log("user: ", props.userId)

    Axios.post('/api/users/save', {
      job: props.job
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <button onClick={saveFavorite}>Save to Favorites</button>
    </div>
  )
}

export default FavoriteButton
