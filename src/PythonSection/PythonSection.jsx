import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./PythonSection.css";

const PythonSection = () => {
  return (
    <div className="python_section">
      <Container>
        <Row className="main_python_section">
          <Col className="sub_main_python_section">
            <h1>PYTHON</h1>
            <p>A popular programming language.</p>
            <Button variant="success">Learn Python</Button>
            <Button variant="success">Python Reference</Button>
          </Col>
          <Col className="sub_main_python_section2">
            <div className="inner">
              <p>
                A popular programming language. A popular programming language.
                A popular programming language. A popular programming language.
                A popular programming language. A popular programming language.
                A popular programming language. A popular programming language.
              </p>
            </div>
            <Button variant="success">Try it Yourself</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PythonSection;
