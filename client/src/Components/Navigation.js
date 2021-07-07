import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/OurLogo.png";
import Login from "./Login";


<div className="Logo">
<img src={Logo} alt="Our Logo"/> 
</div>


const Navigation = (props) => {
  return (
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand href="/" className="Navbar">
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
            <Nav.Link as={Link}
            to={{
              pathname: '/resumeview', user: props.user
            }}>Resume</Nav.Link>
          </NavItem>
        <NavItem>
            <Login className="nav-button" user={props.user} setUser={userId => props.setUser(userId)} />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
