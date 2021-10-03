import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContentBox from "./ContentBox";

const MiddleLinks = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ContentBox title="C#" />
          </Col>
          <Col>
            <ContentBox title="R" />
          </Col>
          <Col>
            <ContentBox title="Kotlin" />
          </Col>
          <Col>
            <ContentBox title="MySql" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox title="NodeJs" />
          </Col>
          <Col>
            <ContentBox title="React" />
          </Col>
          <Col>
            <ContentBox title="JSON" />
          </Col>
          <Col>
            <ContentBox title="AngularJS" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox title="W3.JS" />
          </Col>
          <Col>
            <ContentBox title="XML" />
          </Col>
          <Col>
            <ContentBox title="SASS" />
          </Col>
          <Col>
            <ContentBox title="Icons" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox title="RWD" />
          </Col>
          <Col>
            <ContentBox title="Graphics" />
          </Col>
          <Col>
            <ContentBox title="SVG" />
          </Col>
          <Col>
            <ContentBox title="Canvas" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox title="C#" />
          </Col>
          <Col>
            <ContentBox title="Cyber" />
          </Col>
          <Col>
            <ContentBox title="Colors" />
          </Col>
          <Col>
            <ContentBox title="Git" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox title="Matplotlib" />
          </Col>
          <Col>
            <ContentBox title="Numpy" />
          </Col>
          <Col>
            <ContentBox title="Pandas" />
          </Col>
          <Col>
            <ContentBox title="SciPy" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox title="ASP" />
          </Col>
          <Col>
            <ContentBox title="Accessibility" />
          </Col>
          <Col>
            <ContentBox title="AppML" />
          </Col>
          <Col>
            <ContentBox title="Go" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddleLinks;
