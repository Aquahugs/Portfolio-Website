import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import '../stylesheets/Era.css';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter'

import image1 from '../assets/images/Era/image1.jpg';
import image2 from '../assets/images/Era/image2.jpg';
import image3 from '../assets/images/Era/image3.jpg';
import image4 from '../assets/images/Era/image4.jpg';

import video1 from '../assets/images/Era/vid1.mp4';
import video2 from '../assets/images/Era/vid2.mp4';





import { Desktop, Tablet, Mobile, Phone } from '../shared';
class Era extends React.Component {
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
                  <div className="brandContainer4 brandLanding4">
                    <div className="mugenTitle">
                      <h2>ERA </h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Digital crypto asset</h3>
                    </div>
                  </div>
                </Row>
              </Fade>
                <Container>
                  <Row>
                    <Col xs = '12' className = 'intropassage'>
                      <a href = 'http://www.eranetwork.net/'>
                      <p style = {{color:'#0080E2'}}>www.eranetwork.net</p>
                      </a>
                      <p>This wallet was designed to be highly available and
                       platform-agnostic. Software desktop wallets in MacOS,
                       Windows, and Linux are available. Web wallet is available
                        as well. So it was my job to  develop a  mobile wallet
                        available for iOS and Android. Coming native iOS/Android/
                        Windows/MacOS wallets with feature like in localbitcoins
                        service https://localbitcoins.com/ (direct trade fiat -
                        ERA coins). Release dates will be announced soon.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs = '12' className = 'wireframe'>
                      <Fade bottom>
                      <img src = {image2}/>
                      </Fade>
                    </Col>
                  </Row>
                </Container>
                <Fade left>
                  <Row className = 'row2'>
                      <Col xs = '8' className = 'video1'>
                          <video autoPlay loop muted>
                            <source src={video1} type='video/mp4' alt='wallet'/>
                          </video>
                      </Col>
                    <Col xs ='4' className = 'importwallet'>
                      <h1>Import Wallet</h1>
                      <p> A simple visual communication to import your crypto
                      from one wallet to another easily and securely.
                      </p>
                    </Col>
                  </Row>
                </Fade>
                <Container>
                  <Fade botom>
                    <Row className = 'row3'>
                      <Col xs = '12' className = 'image3'>
                      <img src = {image3}/>
                      </Col>
                    </Row>
                    <Row className = 'row4'>
                      <Col xs = '12' className = 'video2'>
                        <video autoPlay loop muted>
                          <source src={video2} type='video/mp4' alt='wallet'/>
                        </video>
                      </Col>
                    </Row>
                  </Fade>
                </Container>
                <Fade>
                  <Row className = 'banner2'>
                    <Col xs = '12'  className = 'title2'>
                      <img src = {image4}/>
                    </Col>
                  </Row>
                </Fade>
                <Container>
                  <ProjectFooter/>
                </Container>
            </Desktop>

            <Tablet>
            <Fade>
              <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                <div className="brandContainer4 brandLanding4">
                  <div className="mugenTitle">
                    <h2>ERA </h2>
                    <h3 style={{fontFamily: 'Open Sans'}}>Digital crypto asset</h3>
                  </div>
                </div>
              </Row>
            </Fade>
              <Container>
                <Row>
                  <Col xs = '12' className = 'intropassage'>
                    <a href = 'http://www.eranetwork.net/'>
                    <p style = {{color:'#0080E2'}}>www.eranetwork.net</p>
                    </a>
                    <p>This wallet was designed to be highly available and
                     platform-agnostic. Software desktop wallets in MacOS,
                     Windows, and Linux are available. Web wallet is available
                      as well. So it was my job to  develop a  mobile wallet
                      available for iOS and Android. Coming native iOS/Android/
                      Windows/MacOS wallets with feature like in localbitcoins
                      service https://localbitcoins.com/ (direct trade fiat -
                      ERA coins). Release dates will be announced soon.</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'wireframe'>
                    <Fade bottom>
                    <img src = {image2}/>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Fade left>
                <Row className = 'row2'>
                  <Col xs ='12' className = 'importwallet' style = {{padding:'5%'}}>
                    <h1 style = {{textAlign:'center'}}>Import Wallet</h1>
                    <p style = {{textAlign:'center'}}> A simple visual
                    communication to import your crypto
                    from one wallet to another easily and securely.
                    </p>
                  </Col>
                  <Col xs = '12' className = 'video1'>
                      <video autoPlay loop muted>
                        <source src={video1} type='video/mp4' alt='wallet'/>
                      </video>
                  </Col>
                </Row>
              </Fade>
              <Container>
                <Fade botom>
                  <Row className = 'row3'>
                    <Col xs = '12' className = 'image3'>
                    <img src = {image3}/>
                    </Col>
                  </Row>
                  <Row className = 'row4'>
                    <Col xs = '12' className = 'video2'>
                      <video autoPlay loop muted>
                        <source src={video2} type='video/mp4' alt='wallet'/>
                      </video>
                    </Col>
                  </Row>
                </Fade>
              </Container>
              <Fade>
                <Row className = 'banner2'>
                  <Col xs = '12'  className = 'title2'>
                    <img src = {image4}/>
                  </Col>
                </Row>
              </Fade>
              <Container>
                <ProjectFooter/>
              </Container>
          </Tablet>
          <Mobile>
          <Container>
          <Fade>
            <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
              <div className="MbrandContainer4 MbrandLanding4">
                <div className="MmugenTitle">
                  <h2>ERA </h2>
                  <h3 style={{fontFamily: 'Open Sans'}}>Digital crypto asset</h3>
                </div>
              </div>
            </Row>
          </Fade>

              <Row>
                <Col xs = '12' className = 'intropassage'>
                  <a href = 'http://www.eranetwork.net/'>
                  <p style = {{color:'#0080E2'}}>www.eranetwork.net</p>
                  </a>
                  <p>This wallet was designed to be highly available and
                   platform-agnostic. Software desktop wallets in MacOS,
                   Windows, and Linux are available. Web wallet is available
                    as well. So it was my job to  develop a  mobile wallet
                    available for iOS and Android. Coming native iOS/Android/
                    Windows/MacOS wallets with feature like in localbitcoins
                    service https://localbitcoins.com/ (direct trade fiat -
                    ERA coins). Release dates will be announced soon.</p>
                </Col>
              </Row>
              <Row>
                <Col xs = '12' className = 'wireframe'>
                  <Fade bottom>
                  <img src = {image2}/>
                  </Fade>
                </Col>
              </Row>

            <Fade left>
              <Row className = 'row2'>
                  <Col xs ='12' className = 'Mobileimportwallet'>
                    <h1 >Import Wallet</h1>
                    <p> A simple visual communication to import your crypto
                    from one wallet to another easily and securely.
                    </p>
                      <video autoPlay loop muted>
                        <source src={video1} type='video/mp4' alt='wallet'/>
                      </video>
                  </Col>
              </Row>
            </Fade>
                <Row className = 'MobileimageRow'>
                  <Col xs ='12'>
                  <img src = {image3}/>
                    <video autoPlay loop muted>
                      <source src={video2} type='video/mp4' alt='wallet'/>
                    </video>
                  </Col>
                </Row>

              <Fade>
                <Row className = 'banner2'>
                  <Col xs = '12'  className = 'title2'>
                    <img src = {image4}/>
                  </Col>
                </Row>
              </Fade>
            </Container>
        </Mobile>
          </div>
        );
    }
}

export default Era
