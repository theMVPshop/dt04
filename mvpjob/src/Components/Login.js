import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";


 function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (

        <div>
        <Navigation/>
        
        <div className="Login" >
        <Form onSubmit={handleSubmit}>
          <h4>Sign In</h4>
            <div className="Username">
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          </div>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Sign In
          </Button>
          <p className="signuptext">
              New to the App? <a href="">Sign up</a>
            </p>
        </Form>
      </div>
      </div>
    );
  }
  export default Login