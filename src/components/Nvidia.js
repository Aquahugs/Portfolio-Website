import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';


import '../stylesheets/Nvidia.css';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';


import image2 from '../assets/images/Nvidia/image2.jpg';
import image3 from '../assets/images/Nvidia/image3.png';
import image4 from '../assets/images/Nvidia/image4.png';
import image5 from '../assets/images/Nvidia/image5.jpg';
import image6 from '../assets/images/Nvidia/image6.png';
import image7 from '../assets/images/Nvidia/image7.png';
import image8 from '../assets/images/Nvidia/image8.png';
import image9 from '../assets/images/Nvidia/image9.png';
import image10 from '../assets/images/Nvidia/image10.png';
import image11 from '../assets/images/Nvidia/image11.png';


import vid1 from '../assets/images/Nvidia/vid1.mp4';
import vid2 from '../assets/images/Nvidia/test2.mp4';
import vid3 from '../assets/images/Nvidia/vid2.mp4';

import { Desktop, Tablet, Mobile, Phone } from '../shared';






class Nvidia extends React.Component {
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
                <Row  className = 'videotest'>
                  <Col xs = '12' className = 'videotestcol'>
                    <video autoPlay loop muted>
                      <source src={vid2} type='video/mp4' alt='wallet'/>
                    </video>
                    <div className="mugenTitle">
                      <h2>Project Portal</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Exceed your Imagination</h3>
                    </div>
                  </Col>
                </Row>
              </Fade>

              <Container>
                <Row className = 'behindscenes'>
                  <Col xs = '12'>
                  <Row>
                    <Col xs = '8'>
                    <iframe src="https://player.vimeo.com/video/269542838" width="650" height="550" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                    </iframe>
                    </Col>
                    <Col xs = '4'>
                      <h2 style = {{paddingTop:'30%'}}> UX Demo</h2>
                      <p style = {{float:'right',paddingTop:'10%'}}>A Mixed reality
                      user experience demo video  made in Cinema 4d that explains
                      a possible customer use case of a child.</p>
                    </Col>
                  </Row>
                    <img src = {image3}/>
                    <video autoPlay loop muted>
                      <source src={vid3} type='video/mp4' alt='wallet'/>
                    </video>
                    <img src = {image6}/>
                  </Col>
                </Row>
              </Container>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}}>
                <Col xs = '12' className ='video1'>
                  <video autoPlay loop muted>
                    <source src={vid1} type='video/mp4' alt='wallet'/>
                  </video>
                </Col>
              </Row>
              <Row className = 'computer'>
                <Col xs = '12'>
                  <img className = "center-block" src = {image5}/>
                </Col>
                <Row>
                  <Col xs = '8'>
                    <img src = {image11}/>
                  </Col>
                  <Col xs = '4'>
                    <h1> What if Nvidia made a PC?</h1>
                  </Col>
                </Row>
              </Row>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} className = 'yup'>
                <Col xs = '5' className = 'nvidiapc'>
                  <h1> Nvidia PC</h1>
                  <p>A small compact high-performance computer with graphic
                  processing powered by Nvidia. Encased in a frosted clear casing
                  to showcase the internals.</p>
                </Col>
                <Col xs ='7'>
                  <img src = {image7}/>
                </Col>
                <Row style = {{marginTop:'10%'}}>
                  <Col xs = '12'>
                    <img src = {image8}/>
                  </Col>
                </Row>
                <Row  style =
                {
                  {margin:'0', maxwidth : '100%', padding:'0',paddingBottom:'10%'
               }} className = 'yup'>
                  <Col xs = '6' style = {{marginTop:'10%'}}>

                  </Col>
                  <Col xs ='6'  style = {{marginTop:'10%'}}>
                    <img src = {image10}/>
                  </Col>
                </Row>
              </Row>
              <Container>
                <ProjectFooter/>
              </Container>
            </Desktop>



            <Tablet>
              <Fade>
                <Row  className = 'videotest'>
                  <Col xs = '12' className = 'videotestcol'>
                    <video autoPlay loop muted>
                      <source src={vid2} type='video/mp4' alt='wallet'/>
                    </video>
                    <div className="mugenTitle">
                      <h2>Project Portal</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Exceed your Imagination</h3>
                    </div>
                  </Col>
                </Row>
              </Fade>

              <Container>
                <Row className = 'behindscenes'>
                  <Col xs = '12'>
                  <Row>
                    <Col xs = '12'>
                    <h2 style = {{paddingTop:'10%'}}> UX Demo</h2>
                    <p style = {{float:'right'}}>A Mixed reality
                    user experience demo video  made in Cinema 4d that explains
                    a possible customer use case of a child.</p>
                    <iframe src="https://player.vimeo.com/video/269542838" width="950" height="750" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                    </iframe>
                    </Col>
                  </Row>
                    <img src = {image3}/>
                    <video autoPlay loop muted>
                      <source src={vid3} type='video/mp4' alt='wallet'/>
                    </video>
                    <img src = {image6}/>
                  </Col>
                </Row>
              </Container>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}}>
                <Col xs = '12' className ='video1'>
                  <video autoPlay loop muted>
                    <source src={vid1} type='video/mp4' alt='wallet'/>
                  </video>
                </Col>
              </Row>
              <Row className = 'computer'  >
                <Col xs = '12'>
                  <img className = "center-block" src = {image5}/>
                </Col>

                  <Col xs = '12'>
                    <h1 style = {{textAlign:'center'}}> What if Nvidia made a PC?</h1>
                    <img className = "center-block" src = {image11}/>
                  </Col>

              </Row>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} className = 'yup'>
                <Col xs = '5' className = 'nvidiapc'>
                  <h1> Nvidia PC</h1>
                  <p>A small compact high-performance computer with graphic
                  processing powered by Nvidia. Encased in a frosted clear casing
                  to showcase the internals.</p>
                </Col>
                <Col xs ='7'>
                  <img src = {image7}/>
                </Col>
                <Row style = {{marginTop:'10%'}}>
                  <Col xs = '12'>
                    <img src = {image8}/>
                  </Col>
                </Row>
                <Row  style =
                {
                  {margin:'0', maxwidth : '100%', padding:'0',paddingBottom:'10%'
               }} className = 'yup'>

                  <Col xs ='12'  style = {{marginTop:'10%'}}>
                    <img src = {image10}/>
                  </Col>
                </Row>
              </Row>
              <Container>
                <ProjectFooter/>
              </Container>
            </Tablet>




            <Mobile>
              <Fade>
                <Row  className = 'videotest'>
                  <Col xs = '12' className = 'videotestcol'>
                    <video autoPlay loop muted>
                      <source src={vid2} type='video/mp4' alt='wallet'/>
                    </video>
                    <div className="mugenTitle">
                      <h2>Project Portal</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Exceed your Imagination</h3>
                    </div>
                  </Col>
                </Row>
              </Fade>


              <Container>
                <Row className = 'behindscenes'>
                  <Col xs = '12'>
                  <Row>
                    <Col xs = '12'>
                      <h2 style = {{padding:'20%', fontSize:'0.9em'}}> UX Demo</h2>
                      <p style = {{float:'right',padding:'20%'}}>A Mixed reality
                      user experience demo video  made in Cinema 4d that explains
                      a possible customer use case of a child. </p>
                      <iframe src="https://player.vimeo.com/video/269542838" width="400" height="200" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                      </iframe>
                    </Col>
                  </Row>
                    <img src = {image3}/>
                    <video autoPlay loop muted>
                      <source src={vid3} type='video/mp4' alt='wallet'/>
                    </video>
                    <img src = {image6}/>
                  </Col>
                </Row>
              </Container>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}}>
                <Col xs = '12' className ='video1'>
                  <video autoPlay loop muted>
                    <source src={vid1} type='video/mp4' alt='wallet'/>
                  </video>
                </Col>
              </Row>
              <Row className = 'computer'  >
                <Col xs = '12'>
                  <img className = "center-block" src = {image5}/>
                </Col>
              </Row>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} className = 'yup'>
                <Col xs = '12' className = 'nvidiapc'>
                  <h1> Nvidia PC</h1>
                  <p>A small compact high-performance computer with graphic
                  processing powered by Nvidia. Encased in a frosted clear casing
                  to showcase the internals.</p>
                </Col>
                <Col xs ='12'>
                  <img src = {image7}/>
                </Col>
                <Row style = {{marginTop:'10%',marginBottom:'10%'}}>
                  <Col xs = '12'>
                    <img src = {image8}/>
                  </Col>
                </Row>
              </Row>
              <Container>
                <ProjectFooter/>
              </Container>
            </Mobile>
          </div>
        );
    }
}

export default Nvidia
