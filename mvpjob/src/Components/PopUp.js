import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PopUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Sign In
      </Button>
    <div className ="modal-background">
      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Body >
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

export default PopUp;
