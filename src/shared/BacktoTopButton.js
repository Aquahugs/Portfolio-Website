import React, { Component } from 'react';
import IoArrowLeftC from 'react-icons/lib/io/arrow-left-c';
import FaIconPack from 'react-icons/lib/fa'
import '../stylesheets/BacktoTop.css';
import {Redirect} from 'react-router';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import top from '../assets/images/top.png';

class BacktoTop extends React.Component {
  constructor () {
    super()
      this.state = {
      Visble: true
      }
    }

    componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1000;
      if (isTop !== 1000) {
          this.setState.isHidden = false
      }
    });
  }

        //set up a const that scrolls to top (ScrollToTop)
    render() {
        return(
          <Fade delay={4200}>
            <div  className="BacktoTop">
                <a onClick={ () => {window.scrollTo(0, 0)}}>
                    <img src={top}/>
                </a>
            </div>
          </Fade>
        )
    }
}

export default BacktoTop
