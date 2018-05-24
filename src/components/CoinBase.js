import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';

import image1 from '../assets/images/Coinbase/image1.jpg'
import purp from '../assets/images/Coinbase/purp.png'
import red from '../assets/images/Coinbase/red.png'
import yellow from '../assets/images/Coinbase/yellow.png'
import blue from '../assets/images/Coinbase/blue.png'
import mac from '../assets/images/Coinbase/mac.png'
import formfactor from '../assets/images/Coinbase/formfactor.png'
import wallet from '../assets/images/Coinbase/wallet.png'
import uiuxdemo from '../assets/images/Coinbase/uiux.mp4'
import uiuxdemo2 from '../assets/images/Coinbase/intro.mp4'

import { Desktop, Tablet, Mobile, Phone } from '../shared';
class CoinBase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
            <Desktop>
                <div className="CoinBaseContainer">
                    <Row className = "section1">
                      <Col  style = {{textAlign:'center',background:'#e7e6e8'}}  xs = "12">
                        <Fade bottom>
                          <div className = 'info'>
                            <h3 className = 'cb'>CoinBase </h3>
                            <p className = 'cbText'>Coinbase wallet is a secure
                            piece of  crypto hardware that offers full <br/>protection
                            for your assets without sacrificing usability or control.

                            </p>
                          </div>
                          <video className='uiuxdemo2' autoPlay loop muted>
                            <source src={uiuxdemo2} type='video/mp4' alt='wallet'/>
                          </video>
                        </Fade>
                      </Col>
                    </Row>
                    <Row className = "CbBackground">
                        <Col xs = "4">
                            <h1 style = {{
                              fontFamily:'Heebo',
                              fontSize:'60px',
                              color:'white',
                              borderBottom:'2px solid white',
                              padding:'2%'
                            }}>Holistic Design</h1>
                            <p style = {{lineHeight:'250%'}}>
                            Equipped with a unique aspect ratio, and a nanofiber
                            treated exterior case flap, coinbase could differentiates
                            itself from any other daily devise.
                            </p>
                        </Col>
                        <Col xs = "8">
                        <Fade right duration={750}>
                          <img src = {image1}/>
                        </Fade>
                        </Col>
                      </Row>

                      <Row className = 'section2'>
                      <Col xs = "9">
                        <Fade left>
                        <video className='uiuxdemo' autoPlay loop muted>
                          <source src={uiuxdemo} type='video/mp4' />
                        </video>
                        </Fade>
                      </Col>
                      <Col xs ="3">
                        <h1 style = {{
                          fontFamily:'Heebo',
                          fontSize:'45px',
                          color:'white',
                          paddingTop:'40%'
                        }}>UI UX</h1>
                        <p className = 'uiuxtext'>
                        Fluid and large graphics allows for a user friendly<br/>
                         digital experience that creates memorable interactions
                        </p>

                      </Col>
                      </Row>

                      <Row className = 'macbook'>
                          <Col xs = "6">
                            <Fade bottom duration={400}>
                            <img src = {mac}/>
                            </Fade>
                          </Col>
                          <Col xs = "4" style = {{paddingTop:'8%'}}>
                            <Fade bottom duration={600}>
                            <img style={{width: '100%'}} className = 'wallet' src = {formfactor}/>
                            </Fade>
                            <Fade bottom duration={800}>
                              <img style={{width: '100%'}} src = {wallet}/>
                            </Fade>
                          </Col>
                          <Col xs = "2" style={{paddingTop:'15%'}}>
                            <Fade bottom duration={800}>
                              <h1 style = {{
                                fontFamily:'Heebo',
                                fontSize:'40px'
                                }}>Familiar form factor
                              </h1>
                              <p style = {{
                                lineHeight:'200%',
                                fontFamily:'Open sans',
                                fontSize:'16px'
                              }}>
                                Carrying over an existing form factor helps users connect a physical object with a new age of intangible assets
                              </p>
                            </Fade>
                          </Col>
                    </Row>

                    <Row className = 'section1'>
                        <Col style = {{paddingTop:'20%'}} className = 'purpbox' xs = "3">
                          <Fade bottom duration={200}>
                            <img className='purp2' src = {purp}/>
                          </Fade>
                        </Col>
                        <Col style = {{paddingTop:'20%'}} className = 'bluebox' xs = "3">
                          <Fade bottom duration={400}>
                            <img className='blue2' src = {blue}/>
                          </Fade>
                        </Col>
                        <Col style = {{paddingTop:'20%'}} className = 'redbox' xs = "3">
                          <Fade bottom duration={600}>
                            <img  className='red2' src = {red}/>
                          </Fade>
                        </Col>
                        <Col style = {{paddingTop:'20%'}} className = 'yellowbox' xs = "3">
                          <Fade bottom duration={800}>
                            <img className='yellow2' src = {yellow}/>
                          </Fade>
                        </Col>
                      </Row>
                </div>
                <Container>
                  <ProjectFooter/>
                </Container>
            </Desktop>


            <Tablet>
          <div className="CoinBaseContainer">
                <Row className = 'CBTabletrow1'>
                    <Col style = {{textAlign:'center',background:'#e7e6e8'}} xs = '12'>
                    <Fade bottom>
                      <div className = 'info'>
                        <h3 className = 'cb'>CoinBase Wallet</h3>
                        <p className = 'cbText'>Coinbase wallet is a secure
                        piece of  crypto hardware that offers full <br/>protection
                        for your assets without sacrificing usability or control.
                        </p>
                      </div>
                      <video className='uiuxdemo2' autoPlay loop muted>
                        <source src={uiuxdemo2} type='video/mp4' alt='wallet'/>
                      </video>
                    </Fade>
                    </Col>
                </Row>
                <Row className = "CbBackground">
                  <Col xs = '12'>
                      <h1 style = {{
                        fontFamily:'Heebo',
                        fontSize:'60px',
                        color:'white',
                        borderBottom:'2px solid white',
                        padding:'2%'
                      }}>Holistic Design</h1>
                      <p style = {{lineHeight:'250%'}}>
                      Equipped with a unique aspect ratio, and a nanofiber
                      treated exterior case flap, coinbase could differentiates
                      itself from any other daily devise.
                      </p>

                  </Col>
                  <Col xs = '12'>
                  <Fade right duration={750}>
                    <img src = {image1}/>
                  </Fade>
                  </Col>
                </Row>
                <Row style = {{background:'#d9d8da'}}>
                <Col xs = '12'>
                  <Fade left>
                  <video className='uiuxdemo' autoPlay loop muted>
                    <source src={uiuxdemo} type='video/mp4' />
                  </video>
                  </Fade>
                </Col>
                </Row>

                <Row className = 'Tabletmacbook'>
                <Col xs = '12' style={{paddingTop:'5%'}}>
                  <Fade bottom duration={800}>
                    <h1 style = {{
                      fontFamily:'Heebo',
                      fontSize:'40px'
                      }}>Familiar form factor
                    </h1>
                    <p style = {{
                      lineHeight:'200%',
                      fontFamily:'Open sans',
                      fontSize:'16px'
                    }}>
                      Carrying over an existing form factor helps users
                      connect a physical object with a new age of intangible
                       assets
                    </p>
                  </Fade>
                </Col>
                  <div className = 'MacbookContainer'>
                  <Col xs = '12'>
                    <Fade bottom duration={400}>
                    <img src = {mac}/>
                    </Fade>
                  </Col>
                  <Col xs = '12'>
                    <Fade bottom duration={600}>
                    <img style={{width: '100%'}} className = 'wallet' src = {formfactor}/>
                    </Fade>
                    <Fade bottom duration={800}>
                      <img style={{width: '100%'}} src = {wallet}/>
                    </Fade>
                  </Col>
                  </div>
                </Row>

                <Row>
                  <Col style = {{paddingTop:'20%'}} className = 'purpbox' xs = '12'>
                    <Fade bottom duration={200}>
                      <img className='purp2' src = {purp}/>
                    </Fade>
                  </Col>
                  <Col style = {{paddingTop:'20%'}} className = 'bluebox' xs = '12'>
                    <Fade bottom duration={400}>
                      <img className='blue2' src = {blue}/>
                    </Fade>
                  </Col>
                  <Col style = {{paddingTop:'20%'}} className = 'redbox' xs = '12'>
                    <Fade bottom duration={600}>
                      <img  className='red2' src = {red}/>
                    </Fade>
                  </Col>
                  <Col style = {{paddingTop:'20%'}} className = 'yellowbox' xs = '12'>
                    <Fade bottom duration={800}>
                      <img className='yellow2' src = {yellow}/>
                    </Fade>
                  </Col>
                </Row>
            </div>
          </Tablet>



          <Mobile>
              <div className="CoinBaseContainer">

                    <Row style = {{backgroundColor:'#e7e6e8s'}}>
                      <Col xs = '12'>
                        <div className = 'info'>
                          <h3 className = 'cb'>CoinBase Wallet</h3>
                          <p className = 'cbText'>Coinbase wallet is a secure
                          piece of  crypto hardware that offers full <br/>protection
                          for your assets without sacrificing usability or control.
                          </p>
                        </div>
                      </Col>
                      <Col xs = '12' style = {{padding:'0'}}>
                        <video className='uiuxdemo2' autoPlay loop muted>
                          <source src={uiuxdemo2} type='video/mp4' alt='wallet'/>
                        </video>
                      </Col>
                    </Row>

                    <Row className = "MobileCbBackground">
                      <Col xs = '12'>
                          <h1 style = {{
                            fontFamily:'Heebo',
                            fontSize:'20px',
                            color:'white',
                            borderBottom:'2px solid white',
                            padding:'2%'
                          }}>Holistic Design</h1>
                          <p style = {{lineHeight:'250%', fontSize:'14px'}}>
                          Equipped with a unique aspect ratio, and a nanofiber
                          treated exterior case flap, coinbase could differentiates
                          itself from any other daily devise.
                          </p>
                      </Col>
                      <Col xs = '12'>
                      <Fade right duration={750}>
                        <img src = {image1}/>
                      </Fade>
                      </Col>
                    </Row>

                    <Row style = {{background:'#d9d8da'}}>
                      <Col xs = '12' style = {{textAlign:'center'}}>
                        <h1 style = {{
                          fontFamily:'Heebo',
                          fontSize:'23px',
                          color:'white',
                        }}>UI UX</h1>
                        <p>
                        Fluid and large graphics allows for a user friendly<br/>
                        digital experience that creates memorable interactions
                        </p>
                      </Col>
                      <Col xs = '12'>
                        <Fade left>
                        <video className='uiuxdemo' autoPlay loop muted>
                          <source src={uiuxdemo} type='video/mp4' />
                        </video>
                        </Fade>
                      </Col>
                    </Row>

                    <Row className = 'Mobilemacbook'>
                    <Col xs = '12' style={{paddingTop:'15%',textAlign:'center'}}>
                      <Fade bottom duration={800}>
                        <h1 style = {{
                          fontFamily:'Heebo',
                          fontSize:'40px',

                          }}>Familiar form factor
                        </h1>
                        <p style = {{
                          lineHeight:'200%',
                          fontFamily:'Open sans',
                          fontSize:'16px'

                        }}>
                          Carrying over an existing form factor helps users
                          connect a physical object with a new age of intangible
                          assets
                        </p>
                      </Fade>
                    </Col>
                      <div className = 'MacbookContainer'>
                        <Col xs = '12'>
                          <Fade bottom duration={600}>
                          <img style={{width: '100%'}} className = 'wallet' src = {formfactor}/>{/*later make the wallet and device horizontal */}
                          </Fade>
                          <Fade bottom duration={800}>
                            <img style={{width: '100%'}} src = {wallet}/>
                          </Fade>
                        </Col>
                        <Col xs = '12'>
                          <Fade bottom duration={400}>
                          <img src = {mac}/>
                          </Fade>
                        </Col>
                      </div>
                    </Row>

                    <Row>
                      <Col style = {{paddingTop:'20%'}} className = 'purpbox' xs = '12'>
                        <Fade bottom duration={200}>
                          <img className='purp2' src = {purp}/>
                        </Fade>
                      </Col>
                      <Col style = {{paddingTop:'20%'}} className = 'bluebox' xs = '12'>
                        <Fade bottom duration={400}>
                          <img className='blue2' src = {blue}/>
                        </Fade>
                      </Col>
                      <Col style = {{paddingTop:'20%'}} className = 'redbox' xs = '12'>
                        <Fade bottom duration={600}>
                          <img  className='red2' src = {red}/>
                        </Fade>
                      </Col>
                      <Col style = {{paddingTop:'20%'}} className = 'yellowbox' xs = '12'>
                        <Fade bottom duration={800}>
                          <img className='yellow2' src = {yellow}/>
                        </Fade>
                      </Col>
                    </Row>

                </div>
            </Mobile>
          </div>
        );
    }
}

export default CoinBase
