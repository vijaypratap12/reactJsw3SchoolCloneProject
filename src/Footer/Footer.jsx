import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="sub_footer">
          <Col></Col>
          <Col className="footer_icons">
            <FaFacebookF className="icon1" data-tip="facebook" />
            <FaInstagram className="icon1" data-tip="instagram" />
            <FaLinkedinIn className="icon1" data-tip="linkedin" />
          </Col>
        </Row>
        <Row>
          <Col className="footer_upper">
            <p>
              W3Schools is optimized for learning, testing, and training.
              Examples might be simplified to improve reading and basic
              understanding. Tutorials, references, and examples are constantly
              reviewed to avoid errors, but we cannot warrant full correctness
              of all content. While using this site, you agree to have read and
              accepted our terms of use, cookie and privacy policy. Copyright
              1999-2021 by Refsnes Data. All Rights Reserved.
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="footer_lower">
            <Button variant="success">W3SCHOOLS SHOP</Button>
          </Col>
        </Row>
        <Row>
          <Col className="footer_rights">
            <p>Privacy Policy | Copyright &copy; | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
