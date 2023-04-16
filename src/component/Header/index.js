import React from "react";
import './Header.css'
import { CgProfile } from "react-icons/cg";
import { AiFillLock } from "react-icons/ai";

const Header = (props) => {
  return (
    <div>
    {/*<Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
      <Container>
        {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
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
            </Nav.Link>
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
                <Button variant="danger">Post a Deal</Button>
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar>*/}
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt='logo' width={100}/> 
          <div className="flexCenter h-menu">
            <a href='/'>ABOUT</a>
            <a href='/'>MARKETPLACE</a>
            <a href='/'>MASTERCLASS</a>
            <a href='/'>MEDIA</a>
            <a href='/'>MEMBERSHIP</a>
            <a href='/'><CgProfile/>REGISTER</a>
            <a href='/'><AiFillLock/>LOGIN</a>
            <button className="button">
              <a href='/'>POST A DEAL</a>
            </button>
          </div>
      </div>
    </section>


    </div>
  );
};

export default Header;
