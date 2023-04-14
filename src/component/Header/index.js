import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillLock } from "react-icons/ai";

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
      <Container>
        {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
        <Link to="/" className="navbar-brand">
          <img src="./logo.png" alt="logo" height={50}/>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">HOME</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">MARKETPLACE</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">MASTERCLASS</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">MEMBERSHIP</NavLink>
              </li><li className="nav-item">
                  <NavLink to="/signin" className="nav-link">MEDIA</NavLink>
              </li>
            </Nav>
          <Nav>
            {/*<Nav.Link href="#deets">More deets</Nav.Link>*
            <Nav.Link eventKey={2} href="#memes">
              Signin
            </Nav.Link>*/}
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                <CgProfile />
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                <AiFillLock />
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                post a deal
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
