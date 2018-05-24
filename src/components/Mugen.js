import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import BackButton from '../shared/BackButton';
import BacktoTop from '../shared/BacktoTopButton';
import ProjectFooter from '../shared/ProjectFooter';

import '../stylesheets/Mugen.css';


import image2 from '../assets/images/Mugen/image2.png';
import image3 from '../assets/images/Mugen/image3.jpg';
import image4 from '../assets/images/Mugen/image4.jpg';
import image5 from '../assets/images/Mugen/image5.jpg';
import image6 from '../assets/images/Mugen/image6.jpg';
import image8 from '../assets/images/Mugen/image8.jpg';
import image9 from '../assets/images/Mugen/image9.jpg';
import image10 from '../assets/images/Mugen/image10.jpg';
import image11 from '../assets/images/Mugen/image11.jpg';


import slide9 from '../assets/images/Mugen/slide9.jpg'
import slide1 from '../assets/images/Mugen/slide1.jpg'
import slide2 from '../assets/images/Mugen/slide2.jpg'
import slide3 from '../assets/images/Mugen/slide3.jpg'
import slide4 from '../assets/images/Mugen/slide4.jpg'
import slide5 from '../assets/images/Mugen/slide5.jpg'
import slide6 from '../assets/images/Mugen/slide6.jpg'
import slide7 from '../assets/images/Mugen/slide7.JPG'
import slide8 from '../assets/images/Mugen/slide8.jpg'
import slide10 from '../assets/images/Mugen/slide10.jpg'

import Slider from 'react-slick';




import { Desktop, Tablet, Mobile, Phone } from '../shared';

const settings = {
  dots: true,
  infinte: true,
  speed: 500,
  swipeToSlide: true,
  autoplay: true,
  draggable: true
};

class Mugen extends React.Component {
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
                  <div className="brandContainer3 brandLanding3">
                    <div className="mugenTitle">
                      <h2>Mugen Coll</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Building a streetwear clothing brand</h3>
                    </div>
                  </div>
                </Row>
              </Fade>
              <Container>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <h3>Story</h3>
                    <p style = {{paddingTop:'2%'}}>
                      Here is a story about a startup clothing brand I launched after
                      buying a screen printer  with all of my graduation money which
                      then led to me traveling to visit and photograph people in my
                      clothing that i soley met off of instagram.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image2}/>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image3}/>
                    <img src = {image4}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <p style = {{paddingTop:'2%'}}>
                      夢限 ” (mügen) . A forever lasting dream<br/>
                      夢限 ( pronounce: mügén) is a Japanese character
                      that we made the brand in many of the designs which means
                      "a forever lasting dream"
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image5}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <h3>Taiwan</h3>
                    <p style = {{paddingTop:'2%'}}>
                      After experiencing and taking photos in  Australia i then
                      started to receive direct messages from a girl named
                       Bernice who lived in taiwan and I though really fit
                       the aesthetic for a spring / summer collection that I
                       had lined up. So that night i booked my tickets and
                       headed to Taipei Taiwan 2 weeks later.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image6}/>
                    <img src = {image8}/>
                    <img src = {image9}/>
                    <img src = {image10}/>
                    <Slider {...settings}>
                      <img src = {slide9}/>
                      <img src = {slide1}/>
                      <img src = {slide2}/>
                      <img src = {slide3}/>
                      <img src = {slide10}/>
                      <img src = {slide4}/>
                      <img src = {slide5}/>
                      <img src = {slide6}/>
                      <img src = {slide7}/>
                      <img src = {slide8}/>
                    </Slider>
                  </Col>
                </Row>

                <Row style = {{paddingTop:'10%'}}>
                  <Col xs ='7'>
                    <h3>Conclusion</h3>
                    <p className = 'girlpinktext'>
                    Defining a visual identity was difficult, I carefully analyze
                    brands and their product. By using swift design principles
                     and social media marketing, I somehow shape a community
                     that aided in defining the brand.<br/>
                     This allowed me to create an aesthetic and brand narrative
                      that was unique in global sense.
                    </p>
                  </Col>
                  <Col xs = '5' className = 'girlpink'><img src = {image11}/></Col>
                </Row>
                <ProjectFooter/>
              </Container>

          </Desktop>




          <Tablet>
              <Fade>
                <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                  <div className="brandContainer3 brandLanding3">
                    <div className="mugenTitle">
                      <h2>Mugen Coll</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Building a streetwear clothing brand</h3>
                    </div>
                  </div>
                </Row>
              </Fade>
              <Container>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <h3>Story</h3>
                    <p style = {{paddingTop:'2%'}}>
                      Here is a story about a startup clothing brand I launched after
                      buying a screen printer  with all of my graduation money which
                      then led to me traveling to visit and photograph people in my
                      clothing that i soley met off of instagram.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image2}/>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image3}/>
                    <img src = {image4}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <p style = {{paddingTop:'2%'}}>
                      夢限 ” (mügen) . A forever lasting dream<br/>
                      夢限 ( pronounce: mügén) is a Japanese character
                      that we made the brand in many of the designs which means
                      "a forever lasting dream"
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image5}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <h3>Taiwan</h3>
                    <p style = {{paddingTop:'2%'}}>
                      After experiencing and taking photos in  Australia i then
                      started to receive direct messages from a girl named
                       Bernice who lived in taiwan and I though really fit
                       the aesthetic for a spring / summer collection that I
                       had lined up. So that night i booked my tickets and
                       headed to Taipei Taiwan 2 weeks later.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image6}/>
                    <img src = {image8}/>
                    <img src = {image9}/>
                    <img src = {image10}/>
                    <Slider {...settings}>
                      <img src = {slide9}/>
                      <img src = {slide1}/>
                      <img src = {slide2}/>
                      <img src = {slide3}/>
                      <img src = {slide10}/>
                      <img src = {slide4}/>
                      <img src = {slide5}/>
                      <img src = {slide6}/>
                      <img src = {slide7}/>
                      <img src = {slide8}/>
                    </Slider>
                  </Col>
                </Row>
                <Row style = {{paddingTop:'10%'}}>
                  <Col xs ='7'>
                    <h3>Conclusion</h3>
                    <p className = 'girlpinktext'>
                    Defining a visual identity was difficult, I carefully analyze
                    brands and their product. By using swift design principles
                     and social media marketing, I somehow shape a community
                     that aided in defining the brand.<br/>
                     This allowed me to create an aesthetic and brand narrative
                      that was unique in global sense.
                    </p>
                  </Col>
                  <Col xs = '5' className = 'girlpink'><img src = {image11}/></Col>
                </Row>
                <ProjectFooter/>
              </Container>
          </Tablet>



          <Mobile>
              <Fade>
                <Row style = {{maxwidth : '100%', padding:'0', margin:'0'}} >
                  <div className="brandContainer3 brandLanding3">
                    <div className="mugenTitle">
                      <h2>Mugen Coll</h2>
                      <h3 style={{fontFamily: 'Open Sans'}}>Building a streetwear clothing brand</h3>
                    </div>
                  </div>
                </Row>
              </Fade>
              <Container>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <h3>Story</h3>
                    <p style = {{paddingTop:'2%'}}>
                      Here is a story about a startup clothing brand I launched after
                      buying a screen printer  with all of my graduation money which
                      then led to me traveling to visit and photograph people in my
                      clothing that i soley met off of instagram.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image2}/>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image3}/>
                    <img src = {image4}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <p style = {{paddingTop:'2%'}}>
                      夢限 ” (mügen) . A forever lasting dream<br/>
                      夢限 ( pronounce: mügén) is a Japanese character
                      that we made the brand in many of the designs which means
                      "a forever lasting dream"
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image5}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs = '12' className = 'passage1'>
                    <h3>Taiwan</h3>
                    <p style = {{paddingTop:'2%'}}>
                      After experiencing and taking photos in  Australia i then
                      started to receive direct messages from a girl named
                       Bernice who lived in taiwan and I though really fit
                       the aesthetic for a spring / summer collection that I
                       had lined up. So that night i booked my tickets and
                       headed to Taipei Taiwan 2 weeks later.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className = 'whitetee' xs = '12' style = {{marginTop:'10%'}}>
                    <img src = {image6}/>
                    <img src = {image8}/>
                    <img src = {image9}/>
                    <img src = {image10}/>
                    <Slider {...settings}>
                      <img src = {slide9}/>
                      <img src = {slide1}/>
                      <img src = {slide2}/>
                      <img src = {slide3}/>
                      <img src = {slide10}/>
                      <img src = {slide4}/>
                      <img src = {slide5}/>
                      <img src = {slide6}/>
                      <img src = {slide7}/>
                      <img src = {slide8}/>
                    </Slider>
                  </Col>
                </Row>
                <Row style = {{paddingTop:'10%'}}>
                  <Col xs ='12'>
                    <h3>Conclusion</h3>
                    <p className = 'girlpinktext'>
                    Defining a visual identity was difficult, I carefully analyze
                    brands and their product. By using swift design principles
                     and social media marketing, I somehow shape a community
                     that aided in defining the brand.<br/>
                     This allowed me to create an aesthetic and brand narrative
                      that was unique in global sense.
                    </p>
                  </Col>
                  <Col xs = '12' className = 'girlpink'><img src = {image11}/></Col>
                </Row>
                <ProjectFooter/>
              </Container>
          </Mobile>
          </div>
        );
    }
}

export default Mugen
