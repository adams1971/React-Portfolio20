import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
// import oceanBG from 'Images/oceanBG.jpg';
// import myImage from './images/headShot1.JPG';



function HomePg() {
    return (
    //   <Row style={{backgroundImage: `url(${oceanBG})`}}>  
      <Container id='home' className='align-center' style={{ paddingBottom: '300px' }}>

            <Row>
                <Col size='sm-9'>
                    <Jumbotron>
                        <h4 style={{ color: "blue"}}> 
                        Welcome to my Landing Page, I hope you like what you see!
                        </h4>
                        {/* <img src={myImage} className="img-fluid float-left rounded-circle portrait" alt='my head shot' style={{ maxWidth: "30%", maxHeight: "auto" }}/> */}
                        <img className="img-fluid float-left rounded-circle portrait" src="./Images/headShot1.JPG" alt="my head shot" style={{ maxWidth: "30%", maxHeight: "auto" }}/>
                        {/* <br /> */}
                        <p className='lead'>Hi, My name is Adam Stevenson, I have completed a Full Stack Web Developer Bootcamp through the University of Washington. As I continue to develop my skills, I look forward to a full time career in Front End Web development.</p>
                        <p className='lead'>I enjoy being a Husband, Dad, Executive Chef and Outdoorsmen</p>
                        <a href="https://www.dropbox.com/s/325g9i1ho37feed/Resume%20Adam%20Stevenson%20Web%20Dev.docx?dl=0" class='btn btn-dark' target='_blank' rel="noreferrer" id='button'>Resume</a>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
        // </Row>
    );
  }
  
  export default HomePg;