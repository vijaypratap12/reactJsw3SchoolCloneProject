import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HtmlSection.css";

const HtmlSection = () => {
  return (
    <div className="htmlsection">
      <Container>
        <Row className="main_htmlsection">
          <Col className="sub_main_htmlsection">
            <h1>HTML</h1>
            <p>This is the content language for webpages.</p>
            <Button variant="success">Learn HTML</Button>
            <Button variant="success">Video Tutorial</Button>
            <Button variant="success">HTML Reference</Button>
          </Col>
          <Col className="sub_main_htmlsection2">
            <div className="inner">
              <p>
                This is the content language for webpages. This is the content
                language for webpages. This is the content language for
                webpages. This is the content language for webpages. This is the
                content language for webpages. This is the content language for
                webpages. This is the content language for webpages. This is the
                content language for webpages. This is the content language for
                webpages.
              </p>
            </div>
            <Button variant="success">Try it Yourself</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HtmlSection;
