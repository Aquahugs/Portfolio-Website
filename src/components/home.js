import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import '../stylesheets/Home.css'
import {Link} from 'react-router-dom'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import image1 from '../assets/images/home/image1.jpg'
import image2 from '../assets/images/home/image2.gif'
import image3 from '../assets/images/home/image3.jpg'
import image4 from '../assets/images/home/image4.jpg'
import image6 from '../assets/images/home/image6.jpg'
import image7 from '../assets/images/home/image7.jpg'
import image8 from '../assets/images/home/image8.jpg'
import image9 from '../assets/images/home/image9.jpg'
import image10 from '../assets/images/home/image10.jpg'
import dreamgarage from '../assets/images/home/dreamgarage.mp4'



import { Desktop, Tablet, Mobile, Phone } from '../shared';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="home">
      <Desktop>
      <Fade bottom>
        <Container>
          <Row className = "contencontainer">
            <Col className = "leftcolumn"xs = "6">
              <Link to="/coinbase">
                <div className = "test">
                  <img className = "image" src={image1}/>
                  <div class="overlay">
                    <div class="text">Coinbase - Product Design </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col className = "rightcolumn"xs = "6">
            <Link to="/Ai-Design">
              <div className = "test">
                <img className = "image" src={image2}/>
                <div class="overlay">
                  <div class="text">AI Design - UI/UX</div>
                </div>
              </div>
            </Link>
            </Col>
          </Row>

          <Row className = "contencontainer">
            <Col className = "leftcolumn"xs = "8">
            <Link to="/chevy-journey">
              <div className = "test">
                <img className = "image" src={image3}/>
                <div class="overlay">
                  <div class="text">Chevy Journey - Transportation Design</div>
                </div>
              </div>
            </Link>
            </Col>
            <Col className = "rightcolumn2"xs = "4">
            <Link to="/ERA">
              <div className = "test">
                <img className = "image" src={image4}/>
                <div class="overlay">
                  <div class="text">ERA Mobile Wallet - UI UX </div>
                </div>
              </div>
            </Link>
            </Col>

          </Row>
          <Row className = "contencontainer">
            <Col className = "leftcolumn"xs = "6">
              <Link to="/Dream-Garage">
                <div className = "test">
                <video className='image' autoPlay loop muted>
                  <source src={dreamgarage} type='video/mp4' alt='wallet'/>
                </video>
                  <div class="overlay">
                    <div class="text">Dream Garage</div>
                  </div>
                </div>
              </Link>
            </Col>

            <Col className = "rightcolumn"xs = "6">
              <Row>
                <Col xs= '12'>
                <Link to="/Kia-Kids">
                  <div className = "test">
                    <img className = "image" src={image6}/>
                    <div class="overlay">
                      <div class="text">KIA Kids - Transportation Design </div>
                    </div>
                  </div>
                </Link>
                </Col>
              </Row>

              <Row>
                <Col xs = '12'>
                  <Link to="/Designerspen">
                    <div className = "test">
                      <img style = {{paddingTop:'3%'}} className = "image" src={image7}/>
                      <div class="overlay">
                        <div class="text">Designerspen - Brand & Community </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className = "contencontainer">
            <Col className = "leftcolumn"xs = "6">
            <Link to="/sketch-book">
              <div className = "test">
                <img className = "image" src={image8}/>
                <div class="overlay">
                  <div class="text">Sketch Book</div>
                </div>
              </div>
            </Link>
            </Col>
            <Col className = "rightcolumn"xs = "6">
            <Link to = '/Nvidia'>
              <div className = "test">
                <img className = "image"  src={image9}/>
                <div class="overlay">
                  <div class="text">Project Portal - UX</div>
                </div>
              </div>
            </Link>
            </Col>
          </Row>


          <Row className = "contencontainer">
            <Col className = "Lastrow" xs = "12">
              <Link to="/Mugen">
                <div className = "test">
                  <img className = "image"  src={image10}/>
                  <div class="overlay">
                    <div class="text">Mugen Coll - Branding</div>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
        <Row className ='homefooter'>
          <Col xs = '12'>
            <p>Contact - Jordanfuturev1@gmail.com</p>
          </Col>
        </Row>
        </Fade>
        </Desktop>


    

        <Tablet>
        <Fade bottom>
          <Container>
            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "6">
                <Link to="/coinbase">
                  <div className = "test">
                    <img className = "image" src={image1}/>
                    <div class="overlay">
                      <div class="text">Coinbase - Product Design </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col className = "rightcolumn"xs = "6">
              <Link to="/Ai-Design">
                <div className = "test">
                  <img className = "image" src={image2}/>
                  <div class="overlay">
                    <div class="text">AI Design - UI/UX</div>
                  </div>
                </div>
              </Link>
              </Col>
            </Row>

            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "8">
              <Link to="/chevy-journey">
                <div className = "test">
                  <img className = "image" src={image3}/>
                  <div class="overlay">
                    <div class="text">Chevy Journey - Transportation Design</div>
                  </div>
                </div>
              </Link>
              </Col>
              <Col className = "rightcolumn2"xs = "4">
              <Link to="/ERA">
                <div className = "test">
                  <img className = "image" src={image4}/>
                  <div class="overlay">
                    <div class="text">ERA Mobile Wallet - UI UX </div>
                  </div>
                </div>
              </Link>
              </Col>

            </Row>
            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "6">
                <Link to="/Dream-Garage">
                  <div className = "test">
                  <video className='image' autoPlay loop muted>
                    <source src={dreamgarage} type='video/mp4' alt='wallet'/>
                  </video>
                    <div class="overlay">
                      <div class="text">Dream Garage</div>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col className = "rightcolumn"xs = "6">
                <Row>
                  <Col xs= '12'>
                  <Link to="/Kia-Kids">
                    <div className = "test">
                      <img className = "image" src={image6}/>
                      <div class="overlay">
                        <div class="text">KIA Kids - Transportation Design </div>
                      </div>
                    </div>
                  </Link>
                  </Col>
                </Row>

                <Row>
                  <Col xs = '12'>
                    <Link to="/Designerspen">
                      <div className = "test">
                        <img style = {{paddingTop:'3%'}} className = "image" src={image7}/>
                        <div class="overlay">
                          <div class="text">Designerspen - Brand & Community </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "6">
              <Link to="/sketch-book">
                <div className = "test">
                  <img className = "image" src={image8}/>
                  <div class="overlay">
                    <div class="text">Sketch Book</div>
                  </div>
                </div>
              </Link>
              </Col>
              <Col className = "rightcolumn"xs = "6">
              <Link to = '/Nvidia'>
                <div className = "test">
                  <img className = "image"  src={image9}/>
                  <div class="overlay">
                    <div class="text">Project Portal - UX</div>
                  </div>
                </div>
              </Link>
              </Col>
            </Row>


            <Row className = "contencontainer">
              <Col className = "Lastrow" xs = "12">
                <Link to="/Mugen">
                  <div className = "test">
                    <img className = "image"  src={image10}/>
                    <div class="overlay">
                      <div class="text">Mugen Coll - Branding</div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
          <Row className ='homefooter'>
            <Col xs = '12'>
              <p>Contact - Jordanfuturev1@gmail.com</p>
            </Col>
          </Row>
          </Fade>
        </Tablet>


        <Mobile>
        <Fade bottom>
          <Container>
            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "12">
                <Link to="/coinbase">
                  <div className = "test">
                    <img className = "image" src={image1}/>
                    <div class="overlay">
                      <div class="text">Coinbase - Product Design </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col className = "rightcolumn"xs = "12">
              <Link to="/Ai-Design">
                <div className = "test">
                  <img className = "image" src={image2}/>
                  <div class="overlay">
                    <div class="text">AI Design - UI/UX</div>
                  </div>
                </div>
              </Link>
              </Col>
            </Row>

            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "12">
              <Link to="/chevy-journey">
                <div className = "test">
                  <img className = "image" src={image3}/>
                  <div class="overlay">
                    <div class="text">Chevy Journey - Transportation Design</div>
                  </div>
                </div>
              </Link>
              </Col>
              <Col className = "rightcolumn2"xs = "12">
              <Link to="/ERA">
                <div className = "test">
                  <img className = "image" src={image4}/>
                  <div class="overlay">
                    <div class="text">ERA Mobile Wallet - UI UX </div>
                  </div>
                </div>
              </Link>
              </Col>

            </Row>
            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "12">
                <Link to="/Dream-Garage">
                  <div className = "test">
                  <video className='image' autoPlay loop muted>
                    <source src={dreamgarage} type='video/mp4' alt='wallet'/>
                  </video>
                    <div class="overlay">
                      <div class="text">Dream Garage</div>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col className = "rightcolumn"xs = "12">
                <Row>
                  <Col xs= '12'>
                  <Link to="/Kia-Kids">
                    <div className = "test">
                      <img className = "image" src={image6}/>
                      <div class="overlay">
                        <div class="text">KIA Kids - Transportation Design </div>
                      </div>
                    </div>
                  </Link>
                  </Col>
                </Row>

                <Row>
                  <Col xs = '12'>
                    <Link to="/Designerspen">
                      <div className = "test">
                        <img style = {{paddingTop:'3%'}} className = "image" src={image7}/>
                        <div class="overlay">
                          <div class="text">Designerspen - Brand & Community </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className = "contencontainer">
              <Col className = "leftcolumn"xs = "12">
              <Link to="/sketch-book">
                <div className = "test">
                  <img className = "image" src={image8}/>
                  <div class="overlay">
                    <div class="text">Sketch Book</div>
                  </div>
                </div>
              </Link>
              </Col>
              <Col className = "rightcolumn"xs = "12">
              <Link to = '/Nvidia'>
                <div className = "test">
                  <img className = "image"  src={image9}/>
                  <div class="overlay">
                    <div class="text">Project Portal - UX</div>
                  </div>
                </div>
              </Link>
              </Col>
            </Row>


            <Row className = "contencontainer">
              <Col className = "Lastrow" xs = "12">
                <Link to="/Mugen">
                  <div className = "test">
                    <img className = "image"  src={image10}/>
                    <div class="overlay">
                      <div class="text">Mugen Coll - Branding</div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
          <Row className ='homefooter'>
            <Col xs = '12'>
              <p>Contact - Jordanfuturev1@gmail.com</p>
            </Col>
          </Row>
          </Fade>
        </Mobile>
      </div>
    )
  }
}

export default Home
