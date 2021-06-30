import React, { useState, useEffect } from "react";
import axios from 'axios'

const ResumeView = ({ user, setUser }) => {
    const [resume, setResume] = useState({ });
      
      useEffect(() => {
        async function fetchData() {
          console.log("userRef ", user)
          const request = await axios.get(`/api/expierence/${user}`)
          console.log("request ", request)
        }
        fetchData()
      }, [])

      return (
        <div >
          <h3>hello{ console.log(resume), console.log(user)}</h3>
        </div>
      )
}

export default ResumeView