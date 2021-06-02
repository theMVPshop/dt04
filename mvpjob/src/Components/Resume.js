import React from "react";

const Resume = () => {
  const [resume, setResume] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const onChange = (e) =>
    setResume({ ...resume, [e.target.name]: e.target.value });

  return (
    <div>
      <form>
        <h2>Resume</h2>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" required value={company} />
        <div class="company error"></div>

        <label htmlFor="position">Position</label>
        <input type="text" name="position" required value={position} />
        <div class="position error"></div>

        <label htmlFor="startDate">Start Date</label>
        <input type="text" name="startDate" required value={startDate} />
        <div class="startDate error"></div>

        <label htmlFor="endDate">End Date</label>
        <input type="text" name="endDate" required value={endDate} />
        <div class="endDate error"></div>

        <label htmlFor="description">Description</label>
        <input type="text" name="description" required value={description} />
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

export default Resume