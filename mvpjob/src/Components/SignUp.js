import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const axios = require("axios");

const SignUp = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    zipcode: "",
    city: "",
    state: "",
  });

  const textChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...user };
    console.log(payload);
    axios.post("http://localhost:3000/users/signup", {
      ...payload,
    });
  };

  return (
    <div>
      <div className="Signup">
        <Form onSubmit={handleSubmit}>
          <h4>Account Sign Up</h4>
          <div className="f-i-l">
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autonFocus
                type="email"
                // value={user.email}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                // value={user.password}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                // value={user.firstName}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                // value={user.lastName}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phoneNumber"
                // value={user.phoneNumber}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="zipCode"
                // value={user.zipCode}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="City">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="City"
                // value={user.city}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="State">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="State"
                // value={user.state}
                onChange={textChange}
                required
              ></Form.Control>
            </Form.Group>
          </div>
          <Button block size="lg" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </div>
    //     <div>
    //     <div className="signup">
    //       <h1>
    //         Account <span className="text-primary">Signup</span>
    //       </h1>
    //       <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="email">Email Address</label>
    //           </div>
    //           <input type="email" name="email" value={user.email} onChange={textChange} required />
    //         </div>
    //         <div class="emailError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="password">Password</label>
    //           </div>
    //           <input type="password" name="password" value={user.password} onChange={textChange} required />
    //         </div>
    //         <div class="passwordError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="firstName">First Name</label>
    //           </div>
    //           <input type="firstName" name="firstName" value={user.firstName} onChange={textChange} required />
    //         </div>
    //         <div class="firstNameError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="lastName">Last Name</label>
    //           </div>
    //           <input type="lastName" name="lastName" value={user.lastName} onChange={textChange} required />
    //         </div>
    //         <div class="lastNameError"></div>
    //         <div class="firstNameError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="phoneNumber">Phone Number</label>
    //           </div>
    //           <input type="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={textChange} required />
    //         </div>
    //         <div class="phoneNumberError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="zipcode">Zipcode</label>
    //           </div>
    //           <input type="zipcode" name="zipcode" value={user.zipcode} onChange={textChange} required />
    //         </div>
    //         <div class="zipcodeError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="city">City</label>
    //           </div>
    //           <input type="city" name="city" value={user.city} onChange={textChange} required />
    //         </div>
    //         <div class="cityError"></div>
    //         <div className="form-group">
    //           <div>
    //           <label htmlFor="state">State</label>
    //           </div>
    //           <input type="state" name="state" value={user.state} onChange={textChange} required />
    //         </div>
    //         <div class="stateError"></div>

    //         <input
    //           type="submit"
    //           value="Signup"
    //           className="btn btn-primary btn-block"
    //         />
    //       </form>
    //     </div>
    //     </div>
  );
};

export default SignUp;
