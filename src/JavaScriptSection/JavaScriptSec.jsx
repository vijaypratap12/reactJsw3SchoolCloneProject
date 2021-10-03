import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./JavaScriptSec.css"

const JavaScriptSec = () => {
  return (
    <div className="javascript_sec">
      <Container>
        <Row className="main_javascript_sec">
          <Col className="sub_javascript_sec">
            <h1>JavaScript</h1>
            <p>This language for programming web pages.</p>
            <Button variant="success">Learn JavaScript</Button>
            <Button variant="success">JavaScript Reference</Button>
          </Col>
          <Col className="sub_javascript_sec2">
            <div className="inner">
              <p>
                This language for programming web pages. This language for
                programming web pages. This language for programming web pages.
                This language for programming web pages. This language for
                programming web pages. This language for programming web pages.
                This language for programming web pages.
              </p>
            </div>
            <Button variant="success">Try it Yourself</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JavaScriptSec;
