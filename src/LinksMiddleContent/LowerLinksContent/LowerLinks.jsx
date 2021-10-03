import React from 'react'
import ContentBox from './ContentBox'
import {Container, Row, Col} from 'react-bootstrap'

const LowerLinks = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <ContentBox title="Excel" />
                    </Col>
                    <Col>
                    <ContentBox title="Google Sheets" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ContentBox title="ML" />
                    </Col>
                    <Col>
                    <ContentBox title="AI" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ContentBox title="Statistics" />
                    </Col>
                    <Col>
                    <ContentBox title="Data Science" />
                    </Col>
                </Row>
                </Container>
                </div>
    )
}

export default LowerLinks
