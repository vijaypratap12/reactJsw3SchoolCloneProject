import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import "./ContentBox.css"


const ContentBox = (props) => {
    return (
        <div className="linkBox">
            <Container>
                <Row>
                    <Col className="box" data-aos="zoom-in-up"  data-aos-delay="300">
                     <h1>{props.title}</h1>
                     <p>{props.desc}</p>
                     <Button variant="success">{props.btn}</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContentBox
