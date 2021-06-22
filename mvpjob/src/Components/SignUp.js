import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const axios = require("axios");

const SignUp = ({ userRef, setUserRef }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   zipcode: "",
  //   city: "",
  //   state: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password, firstName, lastName, phoneNumber, zipcode, city, state };
    console.log(payload);
    axios({
      method: 'post',
      url: "http://localhost:5000/api/users/signup",
      data: { ...payload }
    })
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required  
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="email">
              <Form.Label>Password</Form.Label>
              <Form.Control
                autonFocus
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="email">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autonFocus
                type="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                autonFocus
                type="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                autonFocus
                type="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                autonFocus
                type="zipCode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>City</Form.Label>
              <Form.Control
                autonFocus
                type="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>State</Form.Label>
              <Form.Control
                autonFocus
                type="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
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
