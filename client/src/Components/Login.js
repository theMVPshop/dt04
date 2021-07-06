import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import axios from "axios";

function Login({ user, setUser, setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //need to pass this hook from parent component
  //const [userRef, setUserRef] = useState('')

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/users/login', {
    email: email 
    }).then(res => {
       setUser(res.data.userRef)
       document.cookie = "loggedIn=true";
    },(error) => {
      console.log('Login err :', error)
    })
    
  }

  useEffect(() => {

  }, [user])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Sign In
      </Button>
      <div className="modal-background">
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Body>
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
                  <Button
                    onClick={handleClose}
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Sign In
                  </Button>
                  <p className="signuptext">
                    New to the App? <a href="/signUp">Sign up</a>
                  </p>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Login;
