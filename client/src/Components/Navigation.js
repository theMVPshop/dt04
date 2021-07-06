import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Login from "./Login";
const Navigation = (props) => {

  const handleLogout = () => {
    props.setUserId(null)
  }

  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand href="/" className="App-logo">
        Medical
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {props.login === false ? (
          <Nav>
            <NavItem>
              <Nav.Link href="/">Landing</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/about">About</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link}
                to={{
                  pathname: '/signup', user: props.user, setUser: props.setUser
                }}>Sign Up</Nav.Link>
            </NavItem>
          <NavItem>
              <Login className="nav-button" user={props.user} setUser={userId => props.setUser(userId)} setLogin={props.setLogin}/>
            </NavItem>
          </Nav>
        ) : (
          <Nav>
            <NavItem>
              <Nav.Link href="/">Landing</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/about">About</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link}
              to={{
                pathname: '/resumeview', user: props.user
              }}>Resume</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link}
              to={{
                pathname: '/profile', user: props.user
              }}>Profile</Nav.Link>
            </NavItem>
            <NavItem>
              <Button onClick={handleLogout}>Logout</Button>
            </NavItem>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
