import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter'

import '../stylesheets/KiaKids.css';


import image2 from '../assets/images/KiaKids/image2.jpg';
import image3 from '../assets/images/KiaKids/image3.jpg';
import image4 from '../assets/images/KiaKids/image4.jpg';
import image5 from '../assets/images/KiaKids/image5.jpg';
import image6 from '../assets/images/KiaKids/image6.jpg';
import image7 from '../assets/images/KiaKids/image7.jpg';
import image8 from '../assets/images/KiaKids/image8.jpg';


import { Desktop, Tablet, Mobile, Phone } from '../shared';
class Designerspen extends React.Component {
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
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                <div className="brandContainer2 brandLanding2">
                  <div className="mugenTitle">
                    <h2>Generation Alpha</h2>
                    <h3 style={{fontFamily: 'Open Sans'}}>Born 2010-2024</h3>
                  </div>
                </div>
              </Row>
            </Fade>
            <Container>
              <Row className = 'storyimages'>
                <Col xs = '12'>
                  <h1> Mobility solution for a new market</h1>
                  <p style = {{paddingTop:'2%'}}>I believe subscription based relationships with customers
                   are soon to be the key driving force to many products.<br/> Imagine
                   a future where having to qualify and being a certain age to
                   just to get from point A to B is no longer relevant <br/> due to
                   high optimization of autonomous vehicles. This would allow
                   for kids to get around easier <br/>due to the lack of need of a
                   driver’s license.</p>
                  <img src = {image2}/>
                  <img src = {image3}/>
                  <div>
                    <img src = {image4}/>
                  </div>
                  <img src = {image5}/>
                  <img src = {image6}/>
                  <img src = {image7}/>
                  <img src = {image8}/>
                </Col>
              </Row>
              <ProjectFooter/>
            </Container>
            </Desktop>

            <Tablet>
            <Fade>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                <div className="brandContainer2 brandLanding2">
                  <div className="mugenTitle">
                    <h2>Generation Alpha</h2>
                    <h3 style={{fontFamily: 'Open Sans'}}>Born 2010-2024</h3>
                  </div>
                </div>
              </Row>
            </Fade>
            <Container>
              <Row className = 'storyimages'>
                <Col xs = '12'>
                  <h1> Mobility solution for a new market</h1>
                  <p style = {{paddingTop:'2%'}}>I believe subscription based relationships with customers
                   are soon to be the key driving force to many products.<br/> Imagine
                   a future where having to qualify and being a certain age to
                   just to get from point A to B is no longer relevant <br/> due to
                   high optimization of autonomous vehicles. This would allow
                   for kids to get around easier <br/>due to the lack of need of a
                   driver’s license.</p>
                  <img src = {image2}/>
                  <img src = {image3}/>
                  <div>
                    <img src = {image4}/>
                  </div>
                  <img src = {image5}/>
                  <img src = {image6}/>
                  <img src = {image7}/>
                  <img src = {image8}/>
                </Col>
              </Row>
              <ProjectFooter/>
            </Container>
            </Tablet>

            <Mobile>
            <Fade>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                <div className="MbrandContainer2 MbrandLanding2">
                  <div className="mugenTitle">
                    <h2>Generation Alpha</h2>
                    <h3 style={{fontFamily: 'Open Sans'}}>Born 2010-2024</h3>
                  </div>
                </div>
              </Row>
            </Fade>
            <Container>
              <Row className = 'storyimages'>
                <Col xs = '12'>
                  <h1> Mobility solution for a new market</h1>
                  <p style = {{paddingTop:'2%'}}>I believe subscription based relationships with customers
                   are soon to be the key driving force to many products.<br/> Imagine
                   a future where having to qualify and being a certain age to
                   just to get from point A to B is no longer relevant <br/> due to
                   high optimization of autonomous vehicles. This would allow
                   for kids to get around easier <br/>due to the lack of need of a
                   driver’s license.</p>
                  <img src = {image2}/>
                  <img src = {image3}/>
                  <div>
                    <img src = {image4}/>
                  </div>
                  <img src = {image5}/>
                  <img src = {image6}/>
                  <img src = {image7}/>
                  <img src = {image8}/>
                </Col>
              </Row>
              <ProjectFooter/>
            </Container>
            </Mobile>
          </div>
        );
    }
}

export default Designerspen
