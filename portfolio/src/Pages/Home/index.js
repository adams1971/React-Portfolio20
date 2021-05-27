import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'


function home() {
    return (
        <Container id='home' className='align-center' style={{ paddingBottom: '300px'}}>

            <Row>
                <Col size='sm-9'>
                    <Jumbotron>
                        <h2> style={{ 
                            color: 'green', 
                            borderBottom: 'light green 2px', 
                            marginBottom: '20px,'}}
                            Hello!!
                        </h2>
                        <img></img>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}


export default home;