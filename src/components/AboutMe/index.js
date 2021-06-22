import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import myImage from '../../assets/Images/headShot1.JPG'


// import oceanBG from './oceanBG.jpg';
// import myImage from './images/headShot1.JPG';



function HomePg() {
    return (
    <Row className='backgd' style={{height: "auto", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${process.env.PUBLIC_URL}/oceanBG3.jpg`}}>  
      <Container id='home' className='align-center' style={{ paddingBottom: '250px'}}>
          <br />
          <br />
            <Row>
                <Col size='sm-9'>
                    <Jumbotron style={{backgroundColor: '#F0FFFF'}}>
                        <h3 style={{ color: '#154360', opacity: '70%', fontSize: '25px'}}> 
                        Welcome to my Landing Page, I hope you like what you see!
                        </h3>
                        
                        {/* <img className="img-fluid float-left rounded-circle portrait" src="./headShot1.JPG" alt="my head shot" style={{ maxWidth: "25%", maxHeight: "auto" }}/> */}
                        <img className="img-fluid float-left rounded-circle portrait" src={myImage} alt="my head shot" style={{ maxWidth: "25%", maxHeight: "auto" }}/>
                        {/* <br /> */}
                        <h4 style={{ color: '#154360', opacity: '70%', fontSize: '15px'}}>Hi, My name is Adam Stevenson, I have completed a Full Stack Web Developer Bootcamp through the University of Washington. As I continue to develop my skills, I look forward to a full time career in Front End Web Development.</h4>
                        <h4 style={{ color: '#154360', opacity: '70%', fontSize: '15px'}}>I enjoy being a Husband, Dad, Executive Chef and Outdoorsmen</h4>
                        <br />
                        
                        <a style={{ margin: '20px'}} href="https://docs.google.com/document/d/12raioGRVSggiFww3gzKUeVBkyKileUrcp5yK5hqcDVk/edit?usp=sharing" class='btn btn-dark' target='_blank' rel="noreferrer" id='button'>Resume</a>

                        <a style={{ margin: '20px'}} href="https://www.linkedin.com/in/adam-stevenson-sea/" class='btn btn-dark' target='_blank' rel="noreferrer" id='button'><i className="fab fa-linkedin"></i> LinkedIn</a>

                        <a style={{ margin: '20px'}} href="https://www.instagram.com/akacodecook/" class='btn btn-dark' target='_blank' rel="noreferrer" id='button'><i
                            className="fab fa-instagram">Instagram</i></a>
                        
                        <a style={{ margin: '20px'}} href="https://github.com/adams1971" class='btn btn-dark' target='_blank' rel="noreferrer" id='button'><i
                            className="fab fa-github"></i></a>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    </Row>
    );
  }
  
  export default HomePg;