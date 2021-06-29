import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

const ResumeCreation = ({ userRef, setUserRef }) => {

  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDesctiption] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { company, position, startDate, endDate, description, userRef };
    console.log(payload);
    axios
      .post("http://localhost:5000/api/experience", {
        ...payload
      })
      .then(res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })

  };

  return (
    <div>
      <div className = "resume">
      <Form onSubmit={handleSubmit}>
        <h3>
          Resume Builder
        </h3>
        <div className= "resume-form">
        <Form.Group size="lg" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                autonFocus
                type="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required  
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control
                autonFocus
                type="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required  
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                autonFocus
                type="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required  
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                autonFocus
                type="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required  
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                autonFocus
                type="description"
                value={description}
                onChange={(e) => setDesctiption(e.target.value)}
                required  
              ></Form.Control>
            </Form.Group>
            </div>
            <Button block size="lg" type="submit">
            Submit
          </Button>
      </Form>
          </div>
      </div>
      
    
  );
};

// export default Resume;



//  <form onSubmit={handleSubmit}>
//         <h2>Resume</h2>
//         <label htmlFor="company">Company</label>
//         <input
//           type="text"
//           name="company"
//           required
//           value={resume.company}
//           onChange={textChange}
//         />
//         <div class="companyError"></div>

//         <label htmlFor="position">Position</label>
//         <input
//           type="text"
//           name="position"
//           required
//           value={resume.position}
//           onChange={textChange}
//         />
//         <div class="positionError"></div>

//         <label htmlFor="startDate">Start Date</label>
//         <input
//           type="text"
//           name="startDate"
//           required
//           value={resume.startDate}
//           onChange={textChange}
//         />
//         <div class="startDateError"></div>

//         <label htmlFor="description">End Date</label>
//         <input
//           type="text"
//           name="endDate"
//           required
//           value={resume.endDate}
//           onChange={textChange}
//         />
//         <div class="endDateError"></div>

//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           name="description"
//           required
//           value={resume.description}
//           onChange={textChange}
//         />
//         <div class="descriptionError"></div>

//         <input
//           type="submit"
//           value="Submit"
//           className="btn btn-primary btn-block"
//         />
//       </form>
//     </div>
//   );
// };

export default ResumeCreation
