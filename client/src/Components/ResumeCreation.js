import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ResumeCreation = ({ user, setUser }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDesctiption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      company,
      position,
      startDate,
      endDate,
      description,
      user,
    };
    console.log(payload);
    axios
      .post("/api/experience", {
        ...payload,
      })
      .then(
        (res) => {
          console.log("resumeCreatioin response: ", res);
        },
        (error) => {
          console.log("resumeCreation err: ", error);
        }
      )
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <div className="resume">
        <Form onSubmit={handleSubmit}>
          <h3>Resume Builder</h3>
          <div className="resume-form">
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

export default ResumeCreation;
