import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./HowToSection.css";

const HowToSection = () => {
  return (
    <div className="howtosection">
      <Container>
        <Row className="sub_howtosection">
          <Col className="sub_sub_howtosection">
            <h1>How to Section</h1>
            <p>Code snippets for HTML, CSS and JavaScript</p>
            <Button variant="success">LEARN HOW TO</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowToSection;
