import React, { Component } from 'react';
import IoArrowLeftC from 'react-icons/lib/io/arrow-left-c';
import FaIconPack from 'react-icons/lib/fa'
import '../stylesheets/BackButton.css';
import {Redirect} from 'react-router';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }
    goBack = () => {
        this.setState({
            redirect: true
        });
    }




    render() {
        const {redirect} = this.state;
        if(redirect) {
            return <Redirect to="/"/>
        }
        return(

              <div className="backBtnTablet">
                  <a onClick={this.goBack}>
                      <Fade delay={4200}>
                        <IoArrowLeftC color={this.props.color} size={30}/>
                        <p className = 'back'>back</p>
                      </Fade>
                  </a>
              </div>
        );
    }
}

export default BackButton
