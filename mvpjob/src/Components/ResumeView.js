import React, { useState, useEffect } from "react";
import axios from './axios'

const ResumeView = ({ userRef, setUserRef }) => {
    const [resume, setResume] = useState({ });
    
      useEffect(() => {
        async function fetchData(params) {
          const request = await axios.get('/expierence')
          console.log(request)
          
        }
        fetchData()
      }, [resume])

      return (
        <div >
          <h3>hello{ console.log(resume) }</h3>
        </div>
      )
}

export default ResumeView