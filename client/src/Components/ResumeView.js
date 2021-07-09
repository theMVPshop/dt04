import React, { useState, useEffect } from "react";
import axios from "axios";

const ResumeView = (props) => {
  const [resume, setResume] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(`/api/expierence/${props.user}`)
  //     .then((res) => {
  //       console.log("res view success: ", res.data);
  //     })
  //     .catch((err) => console.log("resview err: ", err));
  // }, [props.user]);


   useEffect(() => {
    // change to post req and see if that solves it.
    axios
      .post(`/api/expierence/user`, { user: props.user } )
      .then((res) => {
        console.log("res view success: ", res);
      })
      .catch((err) => console.log("resview err: ", err));
  }, [props.user]);

  return (
    <div>
      <h3>
        Resusme Builder
        {
          (console.log("resumeview resumes: ", resume),
          console.log("props :", props.user))
        }
      </h3>
    </div>
  );
};

export default ResumeView;
