import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';


import '../stylesheets/About.css';

import image0 from '../assets/images/About/image0.png'
import image1 from '../assets/images/About/image2.jpg'
import image2 from '../assets/images/About/image3.jpg'
import image3 from '../assets/images/About/image4.jpg'
import git from '../assets/images/About/image5.png'



import { Desktop, Tablet, Mobile, Phone } from '../shared';
class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
          <div>
            <Desktop>
            <Fade>
            <Row className = 'resume' >
              <Col xs = '3'>
                <img src={image0}/>
                <h3>College for Crative Studies</h3>
                <p>4 Year Bachelors degree from CCS in Transportation
                Design located in Detroit,Michigan. I mainly focused on how to  think beyond traditional
                transportation modes and models, to design not only vehicles
                but entire systems that can evolve urban mobility from its
                current auto-dependent, monolithic state to something much more
                dynamic, diverse, and sustainable.</p>
              </Col>
              <Col xs = '3'>
                <img src={image1}/>
                <h3>Skeren Design Institue</h3>
                <p>Lived in Seoul Korea where I experienced a different culture
                and perspective on design as a whole. During my studies I would
                go to class from 10am-7pm that would mainly consist of 2D sketch
                and rendering practices.</p>
              </Col>
              <Col xs = '3'>
                <img src={image2}/>
                <h3>Honda</h3>
                <p>At Honda Research & Development America I explored the design
                process of automobile interiors from a more a production standpoint.
                 Worked Mainly on production interior components
                </p>
              </Col>
              <Col xs = '3'>
                <img src={image3}/>
                <h3>Honda Advanced Design</h3>
                <p>Advanced Design directly correlated with my area of study in
                that the space  provided a deeper understanding of global
                research, future trends, environmental awareness and the
                opportunity to understand how transportation will impact
                our economy in the coming years.</p>
              </Col>
            </Row>
            </Fade>
              <Container>
                <Row className = 'aboutinfo'>
                  <Col xs = '6' className = 'leftcolumnn'>
                    <h1> Tools </h1>
                    <ul>
                      <li>Photoshop</li>
                      <li>AutoDesk Alias</li>
                      <li>Keyshot</li>
                      <li>Cinema 4d</li>
                      <li>Blender</li>
                      <li>Adobe XD</li>
                      <li>Adobe After effects</li>
                    </ul>

                    <h2>Development Tools</h2>
                    <ul>
                      <li>React JS</li>
                      <li>Angular</li>
                      <li>HTML/CSS</li>
                      <li>Java script</li>
                      <li>Node JS </li>
                      <li>Firebase</li>
                      <li>Solidity(Learning)</li>
                    </ul>
                  </Col>
                  <Col xs = '6' className = 'bio'>
                      <h3>About</h3>
                      <p>est 1995</p>
                      <p>
                    I believe every great experience is born from a compelling
                    story. I’ve always tried to seek a good balance between technicality
                     and simplicity through design.<br/>

                     During my freetime these days I like to learn about
                     decentralized applications, build webapps and play Hearthstone. Currently
                     working at Honda Advanced Design, Im always eager to expand
                      my knowledge in all fields.<br/>

                      <span className = 'contact'>Contact</span> : JordanFuturev1@gmail.com <br/>
                      <span className = 'contact'>Phone</span>: 248-701-3571 <br/>
                      Los Angeles, California
                      </p>
                      <a href = 'https://github.com/Aquahugs'>
                        <img src = {git}/>
                      </a>
                    </Col>
                </Row>
              </Container>
            </Desktop>


            <Tablet>
            <Fade>
            <Row className = 'resume' >
              <Col xs = '6'>
                <img src={image0}/>
                <h3>College for Crative Studies</h3>
                <p>4 Year Bachelors degree from CCS in Transportation
                Design located in Detroit,Michigan. I mainly focused on how to  think beyond traditional
                transportation modes and models, to design not only vehicles
                but entire systems that can evolve urban mobility from its
                current auto-dependent, monolithic state to something much more
                dynamic, diverse, and sustainable.</p>
              </Col>
              <Col xs = '6'>
                <img src={image1}/>
                <h3>Skeren Design Institue</h3>
                <p>Lived in Seoul Korea where I experienced a different culture
                and perspective on design as a whole. During my studies I would
                go to class from 10am-7pm that would mainly consist of 2D sketch
                and rendering practices.</p>
              </Col>
              <Col xs = '6'>
                <img src={image2}/>
                <h3>Honda</h3>
                <p>At Honda Research & Development America I explored the design
                process of automobile interiors from a more a production standpoint.
                 Worked Mainly on production interior components
                </p>
              </Col>
              <Col xs = '6'>
                <img src={image3}/>
                <h3>Honda Advanced Design</h3>
                <p>Advanced Design directly correlated with my area of study in
                that the space  provided a deeper understanding of global
                research, future trends, environmental awareness and the
                opportunity to understand how transportation will impact
                our economy in the coming years.</p>
              </Col>
            </Row>
            </Fade>
              <Container>
                <Row className = 'aboutinfo'>
                  <Col xs = '6' className = 'leftcolumnn'>
                    <h1> Tools </h1>
                    <ul>
                      <li>Photoshop</li>
                      <li>AutoDesk Alias</li>
                      <li>Keyshot</li>
                      <li>Cinema 4d</li>
                      <li>Blender</li>
                      <li>Adobe XD</li>
                      <li>Adobe After effects</li>
                    </ul>

                    <h2>Development Tools</h2>
                    <ul>
                      <li>React JS</li>
                      <li>Angular</li>
                      <li>HTML/CSS</li>
                      <li>Java script</li>
                      <li>Node JS </li>
                      <li>Firebase</li>
                      <li>Solidity(Learning)</li>
                    </ul>
                  </Col>
                  <Col xs = '6' className = 'bio'>
                      <h3>About</h3>
                      <p>est 1995</p>
                      <p>
                    I believe every great experience is born from a compelling
                    story. I’ve always tried to seek a good balance between technicality
                     and simplicity through design.<br/>

                     During my freetime these days I like to learn about
                     decentralized applications, build webapps and play Hearthstone. Currently
                     working at Honda Advanced Design, Im always eager to expand
                      my knowledge in all fields.<br/>

                      <span className = 'contact'>Contact</span> : JordanFuturev1@gmail.com <br/>
                      <span className = 'contact'>Phone</span>: 248-701-3571 <br/>
                      Los Angeles, California
                      </p>
                      <a href = 'https://github.com/Aquahugs'>
                        <img src = {git}/>
                      </a>
                    </Col>
                </Row>
              </Container>
            </Tablet>


            <Mobile>
            <Fade>
            <Row className = 'resume' >
              <Col xs = '12'>
                <img src={image0}/>
                <h3>College for Crative Studies</h3>
                <p>4 Year Bachelors degree from CCS in Transportation
                Design located in Detroit,Michigan. I mainly focused on how to  think beyond traditional
                transportation modes and models, to design not only vehicles
                but entire systems that can evolve urban mobility from its
                current auto-dependent, monolithic state to something much more
                dynamic, diverse, and sustainable.</p>
              </Col>
              <Col xs = '12'>
                <img src={image1}/>
                <h3>Skeren Design Institue</h3>
                <p>Lived in Seoul Korea where I experienced a different culture
                and perspective on design as a whole. During my studies I would
                go to class from 10am-7pm that would mainly consist of 2D sketch
                and rendering practices.</p>
              </Col>
              <Col xs = '12'>
                <img src={image2}/>
                <h3>Honda</h3>
                <p>At Honda Research & Development America I explored the design
                process of automobile interiors from a more a production standpoint.
                 Worked Mainly on production interior components
                </p>
              </Col>
              <Col xs = '12'>
                <img src={image3}/>
                <h3>Honda Advanced Design</h3>
                <p>Advanced Design directly correlated with my area of study in
                that the space  provided a deeper understanding of global
                research, future trends, environmental awareness and the
                opportunity to understand how transportation will impact
                our economy in the coming years.</p>
              </Col>
            </Row>
            </Fade>
              <Container>
                <Row className = 'aboutinfo'>
                  <Col xs = '12' className = 'leftcolumnn'>
                    <h1> Tools </h1>
                    <ul>
                      <li>Photoshop</li>
                      <li>AutoDesk Alias</li>
                      <li>Keyshot</li>
                      <li>Cinema 4d</li>
                      <li>Blender</li>
                      <li>Adobe XD</li>
                      <li>Adobe After effects</li>
                    </ul>

                    <h2>Development Tools</h2>
                    <ul>
                      <li>React JS</li>
                      <li>Angular</li>
                      <li>HTML/CSS</li>
                      <li>Java script</li>
                      <li>Node JS </li>
                      <li>Firebase</li>
                      <li>Solidity(Learning)</li>
                    </ul>
                  </Col>
                  <Col xs = '12' className = 'bio'>
                      <h3>About</h3>
                      <p>est 1995</p>
                      <p>
                    I believe every great experience is born from a compelling
                    story. I’ve always tried to seek a good balance between technicality
                     and simplicity through design.<br/>

                     During my freetime these days I like to learn about
                     decentralized applications, build webapps and play Hearthstone. Currently
                     working at Honda Advanced Design, Im always eager to expand
                      my knowledge in all fields.<br/>

                      <span className = 'contact'>Contact</span> : JordanFuturev1@gmail.com <br/>
                      <span className = 'contact'>Phone</span>: 248-701-3571 <br/>
                      Los Angeles, California
                      </p>
                      <a href = 'https://github.com/Aquahugs'>
                        <img src = {git}/>
                      </a>
                    </Col>
                </Row>
              </Container>
            </Mobile>
          </div>
        );
    }
}
export default About
