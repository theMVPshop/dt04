import React from "react";
import { Nav,  Navbar, NavItem } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import PopUp from "./PopUp";
const Navigation = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand href="/" className="App-logo">
        Medical
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav justify-content-left>
          <NavItem>
            <Nav.Link href="/">Landing</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/about">About</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
          </NavItem>
        
          <NavItem>
          
              <PopUp className="nav-button"/>
           
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
