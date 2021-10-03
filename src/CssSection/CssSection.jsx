import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./CssSection.css";

const CssSection = () => {
  return (
    <div className="css_section">
      <Container>
        <Row className="main_css_section">
          <Col className="sub_main_css_section">
            <h1>CSS</h1>
            <p>This is the styling language for webpages.</p>
            <Button variant="success">Learn CSS</Button>
            <Button variant="success">CSS Reference</Button>
          </Col>
          <Col className="sub_main_css_section2">
            <div className="inner">
              <p>
                This is the styling language for webpages. This is the styling
                language for webpages. This is the styling language for
                webpages. This is the styling language for webpages. This is the
                styling language for webpages
              </p>
            </div>
            <Button variant="success">Try it Yourself</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CssSection;
