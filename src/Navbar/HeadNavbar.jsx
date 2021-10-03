import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./HeadNavbar.css";

const HeadNavbar = () => {
  return (
    <div className="section">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="success"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Tutorials</Nav.Link>
              <Nav.Link href="#pricing">References</Nav.Link>
              <Nav.Link href="#pricing">Videos</Nav.Link>
              <NavDropdown title="Exercises" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Exercises
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavLink className="login" href="#xyz" to="/signuploginsection">
                Log in
              </NavLink>
              <NavLink className="login2" eventKey={2} href="#memes" to="">
                Paid Courses
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeadNavbar;
