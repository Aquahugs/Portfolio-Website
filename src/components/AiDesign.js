import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import '../stylesheets/AiDesign.css';




import video from '../assets/images/AiDesign/video.mp4'
import brand from '../assets/images/AiDesign/brand.jpg'
import image2 from '../assets/images/AiDesign/image2.jpg'
import image3 from '../assets/images/AiDesign/image3.jpg'
import image4 from '../assets/images/AiDesign/image4.gif'

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';


import { Desktop, Tablet, Mobile, Phone } from '../shared';
class AiDesign extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
          <div>

            <Desktop>
            <BackButton/>
            <BacktoTop/>
              <Fade>
                <Row className = 'firstvideo' style =
                {{marginleft:'0',
                  marginright:'0',
                  padding:'0'
                }}>
                  <Col className='orange' xs = '12'>
                    <video autoPlay loop muted>
                      <source src={video} type='video/mp4' alt='wallet'/>
                    </video>
                  </Col>
                </Row>
              </Fade>
              <Container>
                <Fade bottom>
                <Row style = {{paddingTop:'10%',paddingBottom:'20%'}}>
                  <Col xs ='12' className ='brief'>
                    <h1> AI Design </h1>
                    <p>For the common person Artificial Intelligence might come
                    off as scary or even intimidating. <br/>So my goal for this project
                     was to avoid exactly that and to create a loving,welcoming<br/>
                     visual representation for an AI companion.</p>
                  </Col>
                </Row>
                </Fade>
                <Fade>
                  <Row>
                    <Col xs ='6' className = 'brandtitle'>
                      <h2>Brand Idenity</h2>
                      <p>I tried to pull the aesthetics and overall feeling of the
                      AI’s appearance from honda’s new playful design language.
                      This design language played as the underlying direction i
                      thought was fitting for creating a playful AI companion.</p>
                    </Col>
                    <Col xs ='6' className = 'brand'>
                      <img src = {brand}/>
                    </Col>
                  </Row>
                </Fade>

                <Row>
                  <Col xs = '12' className = 'finalimages'>
                    <Fade bottom>
                      <img src = {image2}/>
                    </Fade>
                    <Fade bottom>
                      <img src = {image3}/>
                    </Fade>
                    <Fade bottom>
                      <img src = {image4} style = {{paddingBottom:'5%'}}/>
                    </Fade>
                  </Col>
                </Row>
                <ProjectFooter/>
              </Container>
            </Desktop>

            <Tablet>
              <Fade>
                <Row className = 'firstvideo' style =
                {{marginleft:'0',
                  marginright:'0',
                  padding:'0'
                }}>
                  <Col className='orange' xs = '12'>
                    <video autoPlay loop muted>
                      <source src={video} type='video/mp4' alt='wallet'/>
                    </video>
                  </Col>
                </Row>
              </Fade>
              <Container>
                <Fade bottom>
                <Row style = {{paddingTop:'10%',paddingBottom:'20%'}}>
                  <Col xs ='12' className ='brief'>
                    <h1> AI Design </h1>
                    <p>For the common person Artificial Intelligence might come
                    off as scary or even intimidating. <br/>So my goal for this project
                     was to avoid exactly that and to create a loving,welcoming<br/>
                     visual representation for an AI companion.</p>
                  </Col>
                </Row>
                </Fade>
                <Fade>
                  <Row>
                    <Col xs ='6' className = 'brandtitle'>
                      <h2>Brand Idenity</h2>
                      <p>I tried to pull the aesthetics and overall feeling of the
                      AI’s appearance from honda’s new playful design language.
                      This design language played as the underlying direction i
                      thought was fitting for creating a playful AI companion.</p>
                    </Col>
                    <Col xs ='6' className = 'brand'>
                      <img src = {brand}/>
                    </Col>
                  </Row>
                </Fade>

                <Row>
                  <Col xs = '12' className = 'finalimages'>
                    <Fade bottom>
                      <img src = {image2}/>
                    </Fade>
                    <Fade bottom>
                      <img src = {image3}/>
                    </Fade>
                    <Fade bottom>
                      <img src = {image4} style = {{paddingBottom:'5%'}}/>
                    </Fade>
                  </Col>
                </Row>
                <ProjectFooter/>
              </Container>
            </Tablet>

            <Mobile>
              <Fade>
                    <Col xs = '12' >
                      <video style = {{maxWidth:'100%'}} autoPlay loop muted>
                        <source src={video} type='video/mp4' alt='wallet'/>
                      </video>
                    </Col>
              </Fade>
                  <Col xs ='12' className ='Mobilebrief' >
                    <h1 > AI Design </h1>
                    <p>For the common person Artificial Intelligence might come
                    off as scary or even intimidating. <br/>So my goal for this project
                     was to avoid exactly that and to create a loving,welcoming<br/>
                     visual representation for an AI companion.</p>
                  </Col>

                <Fade>
                  <Row>
                    <Col xs ='12' className = 'Mobilebrandtitle'>
                      <h2>Brand Idenity</h2>
                      <p>I tried to pull the aesthetics and overall feeling of the
                      AI’s appearance from honda’s new playful design language.
                      This design language played as the underlying direction i
                      thought was fitting for creating a playful AI companion.</p>
                    </Col>
                    <Col xs ='12' className = 'Mobilebrand'>
                      <img src = {brand}/>
                    </Col>
                  </Row>
                </Fade>


                  <Col xs = '12' className = 'Mobilefinalimages'>

                      <img src = {image2}/>

                      <img src = {image3}/>

                      <img src = {image4} style = {{paddingBottom:'5%'}}/>

                  </Col>
            </Mobile>
          </div>
        );
    }
}

export default AiDesign
