import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import Login from "./Login";
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
            <Nav.Link href="/resume">Resume</Nav.Link>
          </NavItem>
        <NavItem>
            <Login className="nav-button" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
