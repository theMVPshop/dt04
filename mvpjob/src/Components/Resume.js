import React, { useState } from "react";

const Resume = () => {
  const [resume, setResume] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const textChange = (e) =>
    setResume({ ...resume, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...resume };
        console.log(payload)
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Resume</h2>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" required value={resume.company} onChange={textChange} />
        <div class="company error"></div>

        <label htmlFor="position">Position</label>
        <input type="text" name="position" required value={resume.position} onChange={textChange} />
        <div class="position error"></div>

        <label htmlFor="startDate">Start Date</label>
        <input type="text" name="startDate" required value={resume.startDate} onChange={textChange} />
        <div class="startDate error"></div>

        <label htmlFor="endDate">End Date</label>
        <input type="text" name="endDate" required value={resume.endDate} onChange={textChange} />
        <div class="endDate error"></div>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          required
          value={resume.description}
          onChange={textChange}
        />
        <div class="description error"></div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Resume;
