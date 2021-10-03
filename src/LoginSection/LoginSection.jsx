import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./LoginSection.css"

const LoginSection = () => {
  return (
    <div className="loginsection_nav">
      <Container>
        <Row>
          <Col className="sub_loginsection_nav">
            <NavLink to="/loginpage">Log in  </NavLink>
            <NavLink to="/signuppage">|  Sign up</NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginSection;
