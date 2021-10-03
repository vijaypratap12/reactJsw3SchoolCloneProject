import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./SqlSection.css";

const SqlSection = () => {
  return (
    <div className="sql_section">
      <Container>
        <Row className="main_sql_section">
          <Col className="sub_main_sql_section">
            <h1>SQL</h1>
            <p>A language for accessing databases.</p>
            <Button variant="success">Learn SQL</Button>
            <Button variant="success">SQL References</Button>
          </Col>
          <Col className="sub_main_sql_section2">
            <div className="inner">
              <p>
                A language for accessing databases. A language for accessing
                databases. A language for accessing databases. A language for
                accessing databases. A language for accessing databases. A
                language for accessing databases.A language for accessing
                databases.
              </p>
            </div>
            <Button variant="success">Try it Yourself</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SqlSection;
