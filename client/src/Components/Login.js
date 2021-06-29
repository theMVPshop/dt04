import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'



function Login({ userRef, setUserRef }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //need to pass this hook from parent component
  //const [userRef, setUserRef] = useState('')

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmail = email
    let userId
    const setId = setUserRef()
    
    //console.log(newEmail)

    axios.post('http://localhost:5000/api/users/login', {
    email: newEmail 
    }).then(res => {
      userId = res.data.userRef
      console.log(userId)
      setId(userId)
      //issue i think im having here is understanding how recursion is effecting setUserRef which is saying isnt a function.
      //document.cookie = "loggedIn=true";
    },(error) => {
      console.log('err ', newEmail)
      console.log(error)
    })// need to pass a prop down to use hook)
    

      // axios({
      //   method: 'get',
      //   url: "http://localhost:5000/api/users/login",
      //   data: { ...payload }
      // }).then(res => setUserRef(res.userRef)).catch(err => console.log(err) // need to pass a prop down to use hook)

  }

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
                        autofocus
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
                  <Button onClick={handleClose}
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
