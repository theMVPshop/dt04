import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function MyVerticallyCenteredModal(props) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       
      </Modal.Header>
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
  <Button block size="lg" type="submit" disabled={!validateForm()}>
    Sign In
  </Button>
  <p className="signuptext">
      New to the App? <a href="/signUp">Sign up</a>
    </p>
  </Form>
  </div>
  </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
  }
  
  function Pop() {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
  
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
  }


  export default Pop