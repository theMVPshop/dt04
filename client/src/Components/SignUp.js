import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

const SignUp = ({ user, setUser }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password, firstName, lastName, phoneNumber, zipcode, city, state };
    console.log(payload);
    axios.post('/api/users/signup', {...payload}).then(res => { 
      console.log(res) 
      console.log(res.data) 
    }).catch(err => console.log(err))
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
                // autoonFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control

                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group size="lg" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control

                type="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control

                type="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control

                type="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                autonFocus
                type="zipCode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                autonFocus
                type="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group size="lg" controlId="State">
              <Form.Label>State</Form.Label>
              <Form.Control

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