import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import '../stylesheets/SketchBook.css';

import image1 from '../assets/images/SketchBook/image1.jpg'
import image2 from '../assets/images/SketchBook/image2.jpg'
import image3 from '../assets/images/SketchBook/image3.jpg'
import image4 from '../assets/images/SketchBook/image4.jpg'
import image5 from '../assets/images/SketchBook/image5.jpg'
import image6 from '../assets/images/SketchBook/image6.jpg'
import image7 from '../assets/images/SketchBook/image7.jpg'
import image8 from '../assets/images/SketchBook/image8.jpg'
import image9 from '../assets/images/SketchBook/image9.jpg'
import image10 from '../assets/images/SketchBook/image10.jpg'
import image11 from '../assets/images/SketchBook/image11.jpg'
import image12 from '../assets/images/SketchBook/image12.jpg'
import image13 from '../assets/images/SketchBook/image13.jpg'
import image14 from '../assets/images/SketchBook/image14.png'
import image15 from '../assets/images/SketchBook/image15.jpg'
import image16 from '../assets/images/SketchBook/image16.jpg'
import image17 from '../assets/images/SketchBook/image17.jpg'
import image18 from '../assets/images/SketchBook/image18.jpg'
import image19 from '../assets/images/SketchBook/image19.jpg'
import image20 from '../assets/images/SketchBook/image20.jpg'
import image21 from '../assets/images/SketchBook/image21.jpg'
import image22 from '../assets/images/SketchBook/image22.jpg'

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';


import { Desktop, Tablet, Mobile, Phone } from '../shared';
class SketchBook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>

              <Desktop>
              <BackButton/>
              <BacktoTop/>
                <Container>
                <Row>
                <Col xs = '12' className= 'titleinfo'
                style = {{
                  textAlign:'center',
                  paddingTop:'5%'
                }} >
                  <h3> Miscellaneous Ideas</h3>
                </Col>
                </Row>

                <Row>
                  <Col xs = '12' className = 'sketches'>
                    <Fade bottom>
                      <img src={image1}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image2}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image3}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image4}/>
                    </Fade>
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
                    <Fade bottom>
                      <img src={image9}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image10}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image11}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image12}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image13}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image14}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image15}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image16}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image17}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image18}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image19}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image20}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image21}/>
                    </Fade>
                    <Fade bottom>
                      <img src={image22}/>
                    </Fade>
                  </Col>
                </Row>
                <ProjectFooter/>
                </Container>
            </Desktop>


            <Tablet>
              <Container>
              <Row>
              <Col xs = '12' className= 'titleinfo'
              style = {{
                textAlign:'center',
                paddingTop:'5%'
              }} >
                <h3> Miscellaneous Ideas</h3>
              </Col>
              </Row>

              <Row>
                <Col xs = '12' className = 'sketches'>
                  <Fade bottom>
                    <img src={image1}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image2}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image3}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image4}/>
                  </Fade>
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
                  <Fade bottom>
                    <img src={image9}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image10}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image11}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image12}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image13}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image14}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image15}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image16}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image17}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image18}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image19}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image20}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image21}/>
                  </Fade>
                  <Fade bottom>
                    <img src={image22}/>
                  </Fade>
                </Col>
              </Row>
              <ProjectFooter/>
              </Container>
          </Tablet>

          <Mobile>
            <Container>
            <Row>
            <Col xs = '12' className= 'titleinfo'
            style = {{
              textAlign:'center',
              paddingTop:'5%'
            }} >
              <h3> Miscellaneous Ideas</h3>
            </Col>
            </Row>

            <Row>
              <Col xs = '12' className = 'sketches'>
                <Fade bottom>
                  <img src={image1}/>
                </Fade>
                <Fade bottom>
                  <img src={image2}/>
                </Fade>
                <Fade bottom>
                  <img src={image3}/>
                </Fade>
                <Fade bottom>
                  <img src={image4}/>
                </Fade>
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
                <Fade bottom>
                  <img src={image9}/>
                </Fade>
                <Fade bottom>
                  <img src={image10}/>
                </Fade>
                <Fade bottom>
                  <img src={image11}/>
                </Fade>
                <Fade bottom>
                  <img src={image12}/>
                </Fade>
                <Fade bottom>
                  <img src={image13}/>
                </Fade>
                <Fade bottom>
                  <img src={image14}/>
                </Fade>
                <Fade bottom>
                  <img src={image15}/>
                </Fade>
                <Fade bottom>
                  <img src={image16}/>
                </Fade>
                <Fade bottom>
                  <img src={image17}/>
                </Fade>
                <Fade bottom>
                  <img src={image18}/>
                </Fade>
                <Fade bottom>
                  <img src={image19}/>
                </Fade>
                <Fade bottom>
                  <img src={image20}/>
                </Fade>
                <Fade bottom>
                  <img src={image21}/>
                </Fade>
                <Fade bottom>
                  <img src={image22}/>
                </Fade>
              </Col>
            </Row>
            <ProjectFooter/>
            </Container>
        </Mobile>
          </div>
        );
    }
}

export default SketchBook
