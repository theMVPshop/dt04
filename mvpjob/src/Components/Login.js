import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const axios = require("axios");


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRef, setUserRef] = useState('')

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { email, password };
    document.cookie = "loggedIn=true;max-age=60*1000";
    console.log(payload)
    
      axios({
        method: 'get',
        url: "http://localhost:5000/users/login",
        data: { ...payload }
      }).then(res => setUserRef(res.userRef)).catch(err => console.log(err))
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
