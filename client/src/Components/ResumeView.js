import React, { useState, useEffect } from "react";
import axios from "axios";

const ResumeView = (props) => {
  const [resumes, setResumes] = useState();

  useEffect(() => {
    // const reqExp = axios.post(`/api/experience/user`, { user: props.user })
    // const reqUser = axios.post('api/users')

    // change to post req and see if that solves it.
    axios
      .post(`/api/experience/user`, { user: props.user })
      .then((res) => {
        setResumes(res.data);
      })
      .catch((err) => console.log("resume view err: ", err));
  }, [props.user]);

  return (
    <div>
      <h1>resume builder</h1>
      <ul>
        {resumes &&
          resumes.map((resume, idx) => (
            <li>
              <p>Company: {resume.company}</p>
              <p>Position: {resume.position}</p>
              <p>Start Date: {resume.startDate}</p>
              <p>End Date: {resume.endDate}</p>
              <p>Description: {resume.description}</p>
            </li>
          ))}
        {!resumes && <h1>resume builder</h1>}
      </ul>
    </div>
  );
};

export default ResumeView;
