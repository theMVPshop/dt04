import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const axios = require("axios");


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const payload = { email, password };
    axios
      .get("http://localhost:3000/users/login", {
        ...payload,
      }).then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div>
      <div className="Login">
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
            New to the App? <a href="/signUp">Sign up</a>
          </p>
        </Form>
      </div>
    </div>
  );
}
export default Login;
