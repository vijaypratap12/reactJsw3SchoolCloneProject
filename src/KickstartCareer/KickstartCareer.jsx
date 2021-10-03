import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./KickstartCareer.css";

const KickstartCareer = () => {
  return (
    <div className="kickstart">
      <Container>
        <Row>
          <Col className="sub_kickstart" data-aos="zoom-in-up" data-aos-offset="300">
            <h1>Kickstart your career</h1>
            <h2>Get certified by completing a course</h2>
            <Button variant="success">Get started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KickstartCareer;
