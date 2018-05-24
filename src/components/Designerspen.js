import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import '../stylesheets/Designerspen.css';

import slide1 from '../assets/images/DesignersPen/slide1.gif';
import logobig from '../assets/images/DesignersPen/logobig.png';
import layout from '../assets/images/DesignersPen/layout.jpg';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';


import view from '../assets/images/DesignersPen/view.jpg';



import slideMobile from '../assets/images/DesignersPen/MobileSocialLogo.jpg';

import slide4 from '../assets/images/DesignersPen/slide4.png';
import slide5 from '../assets/images/DesignersPen/slide5.png';
import slide6 from '../assets/images/DesignersPen/slide6.png';
import slide7 from '../assets/images/DesignersPen/slide7.png';
import DPImage from '../assets/images/DesignersPen/slide1.gif';
import MobileDpImage from '../assets/images/DesignersPen/mobileimagebanner.jpg';


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
              <div className="DesignersPenContainer">
                <Container className = 'subContainer'>
                  <Fade bottom>
                    <Row>
                    <div className = 'logocontainer' style = {{textAlign:'center'}}>
                      <img claasName ='biglogo'src = {logobig}/>
                    </div>
                      <Col  style = {{padding:'2%'}}xs = '12'>
                        <h1 style = {{
                          textAlign:"center",
                          fontFamily:'Archivo Black'}}>
                          Designerspen
                        </h1>
                        <p style = {{textAlign:"center"}}>
                        A hub for all forms of design
                        </p>
                        <a href = 'https://www.designerspen.com/'>
                          <p style = {{textAlign:"center"}}>
                              www.Designerspen.com
                          </p>
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Image fluid src={DPImage}>
                      </Image>
                    </Row>
                  </Fade>
                  <Row style = {{
                    backgroundColor:'#ff905f',
                    height:'100vh',
                    padding:'2%'

                  }}>
                    <Col xs = '9'>
                      <Fade left>
                        <img className = 'designpic'src = {layout}/>
                      </Fade>
                    </Col>
                    <Col xs = '3'>
                      <h1 style = {{
                        fontFamily:'Archivo Black',
                        color: 'white',
                        paddingTop:'10%'
                      }}> Ultra Minimal Design </h1>
                      <p style = {{
                        color: 'white' ,
                        fontSize: '18px',
                        fontFamily:'Open Sans',
                        padding: '2%',
                        lineHeight:'200%'
                      }}>Less is more, a timeless trend. Where simplicity means cleanness,
                       for a white-dominated, neat page in the name of minimalism.
                      <br/>The space is the king: its optimization works for a
                       multi-functional, versatile design.Also  ​Adding some semi
                        dynamic aspects with traditiional flat design .
                      </p>
                    </Col>

                  </Row>
                  <Row style = {{backgroundColor:'#26272b'}}>
                    <Col xs = '8'>
                      <img src = {view}/>
                    </Col>

                    <Col xs = '4' className = 'passage'>
                      <Fade right>
                        <h2 className = 'newsfeed'>News Feed</h2>
                        <p className = 'newstxt'>A fluid news feed of curetted
                        design content uninterrupted by any graphics or ads .
                        </p>
                      </Fade>
                    </Col>
                  </Row>


                    <Row style = {{backgroundColor:'#e5e9f1'}}>
                      <Col xs = '12'>
                        <Row style = {{padding: '2%', paddingLeft:'35%'}} className='phone'>
                          <Col xs = '5'>
                            <h1 style = {{
                              fontFamily:'Archivo Black',
                              fontSize:'50px',
                              marginTop:'30%'
                            }}>Social Media
                            </h1>
                            <p>Overview est. 2017</p>
                            <Fade bottom  delay={200}>
                              <img className = 'socialStats' src = {slide5}/>
                            </Fade>
                            <Fade bottom  delay={400}>
                              <img className = 'socialStats' src = {slide6}/>
                            </Fade>
                            <Fade bottom  delay={600}>
                              <img className = 'socialStats' src = {slide7}/>
                            </Fade>
                          </Col>
                          <Col xs = '7'>
                            <Fade bottom>
                              <a href = "https://www.instagram.com/designerspen/?hl=en>">
                              <img className ='DpIphone' src = {slide4}/>
                              </a>
                            </Fade>
                          </Col>
                        </Row>

                      </Col>
                      </Row>
                </Container>
              </div>
              <Container>
                <ProjectFooter/>
              </Container>
            </Desktop>
            <Tablet>
              <div className="DesignersPenContainer">
                  <Container>
                    <Fade bottom>
                      <div className = 'logocontainer' style = {{textAlign:'center'}}>
                        <img claasName ='biglogo'src = {logobig}/>
                      </div>
                      <Row>
                        <Col  style = {{
                          padding:'2 %',
                          paddingTop:'3%'
                          }}xs = {12}>

                          <h1 style = {{
                            textAlign:"center",
                            fontFamily:'Archivo Black'}}>
                            Designerspen
                          </h1>
                          <p style = {{textAlign:"center"}}>
                            A hub for all forms of design
                          </p>
                          <a href = 'https://www.designerspen.com/'>
                            <p style = {{textAlign:"center"}}>
                                www.Designerspen.com
                            </p>
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <Image src={DPImage} fluid>
                        </Image>
                      </Row>
                    </Fade>
                    <Row style = {{
                      backgroundColor:'#ff905f',
                      height:'100vh',
                    }}>
                      <Col style={{backgroundColor: '#ff905f', width: '100%', textAlign: 'center'}} xs = {12}>
                        <Fade left>
                          <img src = {layout}/>
                          <h1 style = {{
                            fontFamily:'Archivo Black',
                            color: 'white',
                          }}> Ultra Minimal Design </h1>
                          <p style = {{
                            color: 'white' ,
                            fontSize: '18px',
                            fontFamily:'Open Sans',
                            padding: '2%'
                          }}>Less is more, a timeless trend. Where simplicity means cleanness,
                           for a white-dominated, neat page in the name of minimalism.
                          <br/>The space is the king: its optimization works for a
                           multi-functional, versatile design.Also  ​Adding some semi
                            dynamic aspects with traditiional flat design .
                          </p>
                        </Fade>
                      </Col>
                    </Row>

                    <Row style = {{backgroundColor:'#26272b'}}>
                      <Col xs = {8}>
                        <img src = {view}/>
                      </Col>

                      <Col xs = {4} className = 'passage'>
                        <Fade right>
                          <h2 className = 'newsfeed'>News Feed</h2>
                          <p className = 'newstxt'>A fluid news feed of curetted
                          design content uninterrupted by any graphics or ads .
                          </p>
                        </Fade>
                      </Col>
                    </Row>

                    <Row style = {{backgroundColor:'#e5e9f1'}}>
                      <Col xs = {12}>
                        <Row style = {{padding: '2%', paddingLeft: '25%'}} className='phone'>
                          <Col xs = {12}>
                            <h1 style = {{
                              fontFamily:'Archivo Black',
                              fontSize:'50px',
                              marginTop:'30%'
                            }}>Social Media
                            </h1>
                            <p>Overview est. 2017</p>
                            <Fade bottom  delay={200}>
                              <img  className = 'socialStatsTablet' src = {slide5}/>
                            </Fade>
                            <Fade bottom  delay={400}>
                              <img className = 'socialStatsTablet' src = {slide6}/>
                            </Fade>
                            <Fade bottom  delay={600}>
                              <img  className = 'socialStatsTablet' src = {slide7}/>
                            </Fade>
                          </Col>
                          <Row>
                            <Col xs = {12}>
                              <Fade bottom>
                                <a href = "https://www.instagram.com/designerspen/?hl=en>">
                                <img className ='DpIphone' src = {slide4}/>
                                </a>
                              </Fade>
                            </Col>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
            </Tablet>
            <Mobile>
              <div style={{backgroundColor:'#e5e9f1'}} className="DesignersPenContainer">
                  <Container>
                    <Fade bottom>
                      <Row>
                      <div className = 'logocontainer' style = {{textAlign:'center'}}>
                        <img claasName ='biglogo'src = {logobig}/>
                      </div>
                        <Col  style = {{
                          padding:'2%',
                          paddingTop:'3%'
                          }}xs = {12}>
                          <div  style = {{textAlign:'center', paddingLeft:'45%'}}>
                          </div>
                          <h1 style = {{
                            textAlign:"center",
                            fontFamily:'Archivo Black'}}>
                            Designerspen
                          </h1>
                          <p style = {{textAlign:"center"}}>
                            A hub for all forms of design
                          </p>
                          <a href = 'https://www.designerspen.com/'>
                            <p style = {{textAlign:"center"}}>
                                www.Designerspen.com
                            </p>
                          </a>
                        </Col>
                      </Row>
                      <Row>
                        <Image src={MobileDpImage} fluid>
                        </Image>
                      </Row>
                    </Fade>
                    <Row style = {{
                      backgroundColor:'#ff905f',
                      height:'100vh',
                    }}>
                      <Col style={{backgroundColor: '#ff905f', width: '100%', textAlign: 'center'}} xs = {12}>
                        <Fade left>
                          <img src = {layout}/>
                          <h1 style = {{
                            fontFamily:'Archivo Black',
                            color: 'white',
                          }}> Ultra Minimal Design </h1>
                          <p style = {{
                            color: 'white' ,
                            fontSize: '18px',
                            fontFamily:'Open Sans',
                            padding: '2%'
                          }}>Less is more, a timeless trend. Where simplicity means cleanness,
                           for a white-dominated, neat page in the name of minimalism.
                          <br/>The space is the king: its optimization works for a
                           multi-functional, versatile design.Also  ​Adding some semi
                            dynamic aspects with traditiional flat design .
                          </p>
                        </Fade>
                      </Col>
                    </Row>

                    <Row style = {{backgroundColor:'#26272b'}}>
                    <Col xs = {12} className = 'passage'>
                      <Fade right>
                        <h2 className = 'newsfeed'>News Feed</h2>
                        <p className = 'newstxt'>A fluid news feed of curetted
                        design content uninterrupted by any graphics or ads .
                        </p>
                      </Fade>
                    </Col>
                      <Col xs = {12}>
                        <img src = {view}/>
                      </Col>
                    </Row>



                      <div>
                      <Row style={{backgroundColor:'#cad2dd'}}>
                        <Col xs = {12}>
                            <h1 style = {{
                              fontFamily:'Archivo Black',
                              fontSize:'50px',
                              textAlign: 'center',
                              padding:'5%'
                            }}>Social Media
                              </h1>
                        </Col>
                      </Row>
                      <Row style={{backgroundColor:'#cad2dd'}}>
                        <Col xs = '12'>
                          <a href = "https://www.instagram.com/designerspen/?hl=en>">
                          <img className ='DpIphoneMobile' src = {slideMobile}/>
                          </a>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
            </Mobile>
          </div>
        );
    }
}

export default Designerspen
