import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/medicalJobSearch.png";
// import Login from "./Login";

const Navigation = (props) => {


  return (
    <Navbar expand="lg" sticky="top" id="NavBar">
      <div className="leftSide">
        <Navbar.Brand href="/" className="App-logo">
          <div className="LogoDiv">
            <img src={Logo} alt="Our Logo" />
          </div>
        </Navbar.Brand>
      </div>
      <div className="rightSide">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/* Tabled features for v1.1 should render after login but was decided we did not need them till resume function was more fleshed out */}
          {/* {props.login === false ? ( */}
            <Nav>
              <NavItem>
                <Nav.Link
                  as={Link}
                  to={{
                    pathname: "/",
                    user: props.user,
                    login: props.login,
                  }}
                >
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link
                  as={Link}
                  to={{
                    pathname: "/about",
                    user: props.user,
                    login: props.login,
                  }}
                >
                  About
                </Nav.Link>
              </NavItem>
               {/* <NavItem>
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
              <Nav.Link as={Link}
                to={{
                  pathname: '/', user: props.user, login: props.login
                }}>Home</Nav.Link>
            </NavItem>


            ******************** needs to be recommented out till in use
            /* MOVED TO PROFILE PAGE FOR V2 */
            /* <NavItem>
              <Nav.Link as={Link}
              to={{
                pathname: '/resumeview', user: props.user
              }}>Resume</Nav.Link>
            </NavItem>
              **********needs to be recommented out till in use


            <NavItem>
              <Nav.Link as={Link}
              to={{
                pathname: '/profile', user: props.user
              }}>Profile</Nav.Link>
            </NavItem>
            <NavItem>
              <div className="logout nav-button" onClick={handleLogout}>Logout</div>
            </NavItem>
          </Nav>
        )} */} 
        {/* delete line under this if uncommenting lines above only added to close off the nav outside of the ternary */}
        </Nav> 
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
