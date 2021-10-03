import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContentBox from "./ContentBox";

const UpperLinks = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ContentBox
              title="PHP"
              desc="A web server programming language"
              btn="Learn PHP"
            />
          </Col>
          <Col>
            <ContentBox
              title="jQuery"
              desc="A JS library for developing web pages"
              btn="Learn jQuery"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox
              title="Java"
              desc="A programming language"
              btn="Learn Java"
            />
          </Col>
          <Col>
            <ContentBox
              title="C++"
              desc="A programming language"
              btn="Learn C++"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentBox
              title="W3.CSS"
              desc="A CSS framework for faster responsive web pages"
              btn="Learn W3.CSS"
            />
          </Col>
          <Col>
            <ContentBox
              title="Bootstrap"
              desc="A CSS framework for designing better web pages"
              btn="Learn Bootstrap"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpperLinks;
