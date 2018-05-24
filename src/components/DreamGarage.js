import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';


import '../stylesheets/DreamGarage.css';


import image1 from '../assets/images/DreamGarage/image1.png'
import image2 from '../assets/images/DreamGarage/image2.jpg'
import image3 from '../assets/images/DreamGarage/image3.png'
import image4 from '../assets/images/DreamGarage/image4.png'
import image5 from '../assets/images/DreamGarage/image5.png'
import image6 from '../assets/images/DreamGarage/image6.png'
import image7 from '../assets/images/DreamGarage/image7.png'
import background from '../assets/images/DreamGarage/background.jpg'
import Garage from '../assets/images/DreamGarage/Garage.mp4'



import { Desktop, Tablet, Mobile, Phone } from '../shared';
class DreamGarage extends React.Component {
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
                <div className="brandContainer8 brandLanding8">
                  <div className="mugenTitle">
                    <h2>Dream Garage</h2>
                  </div>
                </div>
              </Row>
            </Fade>
              <Container>
                <Row>
                  <Col xs = '12' className = 'about'>
                    <h2>Smart Living</h2>
                    <p>
                      The dream garage was designed to Empower individuals and
                      create a smart way to store your power tools. The garage
                      accessory would give you feedback such as how much battery
                       your tools have and other information such as weather.

                    </p>
                  </Col>
                </Row>

                  <Row className = 'garagecontent'>
                    <Col xs = '6' style = {{paddingTop:'5%'}}>
                      <h2> Package Drawing</h2>
                      <p> It also plays a smart home control center and could
                        display how much energy your house is consuming and
                        contributing to the grid.
                      </p>
                      <img src = {image2}/>
                    </Col>
                    <Col xs = '6'>
                    <video autoPlay loop muted>
                      <source src={Garage} type='video/mp4' alt='wallet'/>
                    </video>
                    </Col>
                  </Row>


                <Row>
                  <Col xs = '12' className = 'ideations'>
                    <h2 style = {{
                        textAlign:'center',
                        padding:'10%'
                      }} >UI</h2>
                    <Fade bottom>
                      <img src = {image7}/>
                    </Fade>
                    <h3 style = {{paddingTop:'10%'}}> House energy consumption interface</h3>
                    <Fade bottom>
                      <img src = {image3}/>
                    </Fade>
                    <Fade bottom>
                      <img src = {image6}/>
                    </Fade>
                    <h3 style = {{paddingTop:'10%'}}> Landing screen ideration </h3>
                    <Fade bottom>
                      <img src = {image5}/>
                    </Fade>
                    <h3 style = {{paddingTop:'10%'}}> Battery Configurations</h3>
                    <Fade bottom>
                      <img src = {image4}/>
                    </Fade>
                  </Col>
                </Row>
                <ProjectFooter/>
              </Container>
              </Desktop>

              <Tablet>
              <Fade>
                <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                  <div className="brandContainer8 brandLanding8">
                    <div className="mugenTitle">
                      <h2>Dream Garage</h2>
                    </div>
                  </div>
                </Row>
              </Fade>
                <Container>
                  <Row>
                    <Col xs = '12' className = 'about'>
                      <h2>Smart Living</h2>
                      <p>
                        The dream garage was designed to Empower individuals and
                        create a smart way to store your power tools. The garage
                        accessory would give you feedback such as how much battery
                         your tools have and other information such as weather.

                      </p>
                    </Col>
                  </Row>

                    <Row className = 'garagecontent'>
                      <Col xs = '12' style = {{paddingTop:'5%'}}>
                        <h2> Package Drawing</h2>
                        <p> It also plays a smart home control center and could
                          display how much energy your house is consuming and
                          contributing to the grid.
                        </p>
                        <img src = {image2}/>
                      </Col>
                      <Col className = 'mobileUIUXtxt' xs = '12' style = {{margin:'auto 0'}}>
                      <h2 >UI/UX Demo</h2>
                      <video autoPlay loop muted>
                        <source src={Garage} type='video/mp4' alt='wallet'/>
                      </video>
                      </Col>
                    </Row>


                  <Row>
                    <Col xs = '12' className = 'ideations'>
                      <h2 style = {{
                          textAlign:'center',
                          padding:'10%'
                        }} >UI</h2>
                      <Fade bottom>
                        <img src = {image7}/>
                      </Fade>
                      <h3 style = {{paddingTop:'10%'}}> House energy consumption interface</h3>
                      <Fade bottom>
                        <img src = {image3}/>
                      </Fade>
                      <Fade bottom>
                        <img src = {image6}/>
                      </Fade>
                      <h3 style = {{paddingTop:'10%'}}> Landing screen ideration </h3>
                      <Fade bottom>
                        <img src = {image5}/>
                      </Fade>
                      <h3 style = {{paddingTop:'10%'}}> Battery Configurations</h3>
                      <Fade bottom>
                        <img src = {image4}/>
                      </Fade>
                    </Col>
                  </Row>
                  <ProjectFooter/>
                </Container>
                </Tablet>




                <Mobile maxWidth = '375px'>
                <Fade>
                  <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                    <div className="brandContainer8 brandLanding8">
                      <div className="mugenTitle">
                        <h2>Dream Garage</h2>
                      </div>
                    </div>
                  </Row>
                </Fade>

                    <Row>
                      <Col xs = '12' className = 'Mobileabout'>
                        <h2>Smart Living</h2>
                        <p>
                          The dream garage was designed to Empower individuals and
                          create a smart way to store your power tools. The garage
                          accessory would give you feedback such as how much battery
                           your tools have and other information such as weather.

                        </p>
                      </Col>
                    </Row>

                      <Row className = 'garagecontent'>
                        <Col xs = '12' style = {{paddingTop:'5%'}}>
                          <h2> Package Drawing</h2>
                          <p> It also plays a smart home control center and could
                            display how much energy your house is consuming and
                            contributing to the grid.
                          </p>
                          <img src = {image2}/>
                        </Col>
                        <Col className = 'mobileUIUXtxt' xs = '12' style = {{margin:'auto 0'}}>
                        <h2 >UI/UX Demo</h2>
                        <video autoPlay loop muted>
                          <source src={Garage} type='video/mp4' alt='wallet'/>
                        </video>
                        </Col>
                      </Row>


                    <Row>
                      <Col xs = '12' className = 'ideations'>
                        <h2 style = {{
                            textAlign:'center',
                            padding:'10%'
                          }} >UI</h2>
                        <Fade bottom>
                          <img src = {image7}/>
                        </Fade>
                        <h3 style = {{paddingTop:'10%'}}> House energy consumption interface</h3>
                        <Fade bottom>
                          <img src = {image3}/>
                        </Fade>
                        <Fade bottom>
                          <img src = {image6}/>
                        </Fade>
                        <h3 style = {{paddingTop:'10%'}}> Landing screen ideration </h3>
                        <Fade bottom>
                          <img src = {image5}/>
                        </Fade>
                        <h3 style = {{paddingTop:'10%'}}> Battery Configurations</h3>
                        <Fade bottom>
                          <img src = {image4}/>
                        </Fade>
                      </Col>
                    </Row>

                </Mobile>
            </div>
        );
    }
}

export default DreamGarage
