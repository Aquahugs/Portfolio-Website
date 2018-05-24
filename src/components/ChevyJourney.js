import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';

import '../stylesheets/ChevyJourney.css';

import image1 from '../assets/images/ChevyJourney/image1.jpg'
import image2 from '../assets/images/ChevyJourney/image2.jpg'
import image3 from '../assets/images/ChevyJourney/image3.jpg'
import image4 from '../assets/images/ChevyJourney/image4.jpg'
import image5 from '../assets/images/ChevyJourney/image5.jpg'
import image6 from '../assets/images/ChevyJourney/image6.jpg'
import image7 from '../assets/images/ChevyJourney/image7.jpg'
import image8 from '../assets/images/ChevyJourney/image8.jpg'
import image9 from '../assets/images/ChevyJourney/image9.jpg'
import image10 from '../assets/images/ChevyJourney/image10.jpg'
import image11 from '../assets/images/ChevyJourney/image11.jpg'
import image12 from '../assets/images/ChevyJourney/image12.jpg'
import background from '../assets/images/ChevyJourney/background.jpg'




import { Desktop, Tablet, Mobile, Phone } from '../shared';
class ChevyJourney extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
      ReactDOM.findDOMNode(this).scrollTop = 0
    }

    render() {
        return(
          <div>
              <Desktop>
              <BackButton/>
              <BacktoTop/>
              <Fade>
                <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                  <div className="brandContainer5 brandLanding5">
                    <div className="mugenTitle">
                      <h2>Chevy Journey</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Utility Transportation</h3>
                    </div>
                  </div>
                </Row>
              </Fade>

                <Container>
                  <Fade bottom>
                    <Row>
                      <Col xs = '12' className= 'titleinfo'
                      style = {{
                        textAlign:'center',
                        paddingTop:'15%',
                        paddingBottom:'15%'
                      }}
                      >
                          <h1>Chevy Journey</h1>
                          <h2>Adventure vehicle service.</h2>
                          <p>It is no longer a mystery that experiential
                          driven services and subscription based options
                          will start to spawn in the transportation sector.
                           So imagine you and your family want to go on a
                           spontaneous road trip but want to get the full
                           autonomous road travel experience ?  This is a service
                           vehicle you would be able to temporarily use as part of
                            being a member of the GM Ecosystem. </p>
                      </Col>
                    </Row>
                  </Fade>
                  <Row>
                    <Col xs = '12' className = 'fullimages'>
                      <Fade bottom>
                        <img src={image1}/>
                      </Fade>
                      <Fade bottom>
                        <img src={image2}/>
                      </Fade>
                      <Fade bottom>
                        <img src={image3}/>
                      </Fade>
                    </Col>
                  </Row>
                  <Fade right>
                    <Row className = 'refinment'>
                      <Col xs = '2' >
                        <h3>Refinment </h3>
                        <p>Photoshop refinment sketches.</p>
                      </Col>
                      <Col xs = '10'>
                        <img src = {image4}/>
                      </Col>
                    </Row>
                  </Fade>

                  <Row>
                    <Col xs = '12'className = 'fullimages'>
                      <Fade bottom>
                        <img src={image5}/>
                      </Fade>
                      <Fade bottom>
                        <img src={image6}/>
                      </Fade>
                      <Fade bottom>
                        <img src={image7}/>
                      </Fade>
                      <Fade bottom>
                        <img src={image8}/>
                      </Fade>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs = '5' className = 'scalemodel'>
                      <img src = {image10}/>
                      <img src = {image11}/>
                    </Col>

                    <Col xs = '7' className = 'scalemodel'>
                    <h3> 1/5th Scale Model</h3>
                    <p>A 1/5th scale physical Model CNC Milled out of 20ib Foam.</p>
                    <img src = {image9}/>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs = '12'className = 'fullimages'>
                      <img src = {image12}/>
                    </Col>
                  </Row>
                <ProjectFooter/>
              </Container>
            </Desktop>



            <Tablet>
              <Fade>
                <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                  <div className="brandContainer5 brandLanding5">
                    <div className="mugenTitle">
                      <h2>Chevy Journey</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Utility Transportation</h3>
                    </div>
                  </div>
                </Row>
              </Fade>

              <Container>
                <Fade bottom>
                  <Row>
                    <Col xs = '12' className= 'titleinfo'
                    style = {{
                      textAlign:'center',
                      paddingTop:'15%',
                      paddingBottom:'15%'
                    }}
                    >
                        <h1>Chevy Journey</h1>
                        <h2>Adventure vehicle service.</h2>
                        <p>It is no longer a mystery that experiential
                        driven services and subscription based options
                        will start to spawn in the transportation sector.
                         So imagine you and your family want to go on a
                         spontaneous road trip but want to get the full
                         autonomous road travel experience ?  This is a service
                         vehicle you would be able to temporarily use as part of
                          being a member of the GM Ecosystem. </p>
                    </Col>
                  </Row>
                </Fade>
                <Row>
                  <Col xs = '12' className = 'fullimages'>
                    <Fade bottom>
                      <img src={image1}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image2}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image3}/>
                    </Fade>
                  </Col>
                </Row>
                <Fade right>
                  <Row className = 'refinment'>
                    <Col xs = '2' >
                      <h3>Refinment </h3>
                      <p>Photoshop refinment sketches.</p>
                    </Col>
                    <Col xs = '10'>
                      <img src = {image4}/>
                    </Col>
                  </Row>
                </Fade>

                <Row>
                  <Col xs = '12'className = 'fullimages'>
                    <Fade bottom>
                      <img src={image5}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image6}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image7}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image8}/>
                    </Fade>
                  </Col>
                </Row>

                <Row>
                  <Col xs = '5' className = 'scalemodel'>
                    <img src = {image10}/>
                    <img src = {image11}/>
                  </Col>

                  <Col xs = '7' className = 'scalemodel'>
                  <h3> 1/5th Scale Model</h3>
                  <p>A 1/5th scale physical Model CNC Milled out of 20ib Foam.</p>
                  <img src = {image9}/>
                  </Col>
                </Row>

                <Row>
                  <Col xs = '12'className = 'fullimages'>
                    <img src = {image12}/>
                  </Col>
                </Row>
              <ProjectFooter/>
            </Container>
          </Tablet>

          <Mobile>
            <Fade>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                <div className="brandContainer5 brandLanding5">
                  <div className="mugenTitle">
                    <h2>Chevy Journey</h2>
                    <h3 style={{fontFamily: 'Open Sans'}}>Utility Transportation</h3>
                  </div>
                </div>
              </Row>
            </Fade>

            <Container>
              <Fade bottom>
                <Row>
                  <Col xs = '12' className= 'titleinfo'
                  style = {{
                    textAlign:'center',
                    paddingTop:'15%',
                    paddingBottom:'15%'
                  }}
                  >
                      <h1>Chevy Journey</h1>
                      <h2>Adventure vehicle service.</h2>
                      <p>It is no longer a mystery that experiential
                      driven services and subscription based options
                      will start to spawn in the transportation sector.
                       So imagine you and your family want to go on a
                       spontaneous road trip but want to get the full
                       autonomous road travel experience ?  This is a service
                       vehicle you would be able to temporarily use as part of
                        being a member of the GM Ecosystem. </p>
                  </Col>
                </Row>
              </Fade>
              <Row>
                <Col xs = '12' className = 'fullimages'>
                  <Fade bottom>
                    <img src={image1}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image2}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image3}/>
                  </Fade>
                </Col>
              </Row>
              <Fade right>
                <Row className = 'refinment'>
                  <Col xs = '12'>
                    <h3>Refinment </h3>
                    <img src = {image4}/>
                  </Col>
                </Row>
              </Fade>

              <Row>
                <Col xs = '12'className = 'fullimages'>
                  <Fade bottom>
                    <img src={image5}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image6}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image7}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image8}/>
                  </Fade>
                </Col>
              </Row>

              <Row>
                <Col xs = '12' className = 'scalemodel'>
                  <img src = {image10}/>
                  <img src = {image11}/>
                </Col>

                <Col xs = '12' className = 'scalemodel'>
                <h3 style = {{paddingTop:'10%',paddingBottom:'10%'}}> 1/5th Scale Model</h3>
                <p>A 1/5th scale physical Model CNC Milled out of 20ib Foam.</p>
                <img src = {image9}/>
                </Col>
              </Row>

              <Row>
                <Col xs = '12'className = 'fullimages'>
                  <img src = {image12}/>
                </Col>
              </Row>
            <ProjectFooter/>
          </Container>
        </Mobile>

          </div>
        );
    }
}

export default ChevyJourney
