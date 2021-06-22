import React, { useState, useEffect } from "react";
const axios = require("axios");

const ResumeView = () => {
    const [resume, setResume] = useState({ });
    
      useEffect(() => {
        const fetchData = async () => {
          const results = await axios("http://localhost:5000/experience")
          
          setResume(results)
        }
        fetchData()
      })

      return (
        <div >
          <h3>hello{ console.log(resume) }</h3>
        </div>
      )
}

export default ResumeView