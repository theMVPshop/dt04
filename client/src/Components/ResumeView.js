import React, { useState, useEffect } from "react";
import axios from 'axios'

const ResumeView = (props) => {
  const [resume, setResume] = useState({});
  useEffect(() => {
    console.log('helloWorld')
    axios.get(`/api/expierence/${props.user}`).then(res => {console.log("res view: ", res}, (error) => {
      console.log('err :', error)
    })
  }, [props.user])

  return (
    <div >
      <h3>Resusme Builder{console.log(resume), console.log("props :", props.user)}</h3>
    </div>
  )
}

export default ResumeView