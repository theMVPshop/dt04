import React, { useState, useEffect } from "react";
import axios from 'axios'

const ResumeView = ({ userRef, setUserRef }) => {
    const [resume, setResume] = useState({ });
    
      useEffect(() => {
        async function fetchData() {
          const request = await axios.get('http://localhost:5000/api/expierence')
          console.log(request)
          
        }
        fetchData()
      }, [resume])

      return (
        <div >
          <h3>hello{ console.log(resume), console.log(userRef)}</h3>
        </div>
      )
}

export default ResumeView