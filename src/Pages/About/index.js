import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <Row style={{height: "auto", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundImage: `url(${process.env.PUBLIC_URL}/oceanBG3.jpg`}}>
            <Container id='about' style={{ backgroundColor: '#F0FFFF' }}>
                <Row>
                    <Col size='sm-12'>
                        <h5>My Journey... Under construction... </h5>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default About;