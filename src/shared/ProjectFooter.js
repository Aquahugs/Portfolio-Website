import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/ProjectFooter.css';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'


class ProjectFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div className = 'PfContainer'>
            <h1> View more</h1>
            <ul className = 'footeritems'>
              <Link to="/coinbase">
                <li>Coinbase</li>
              </Link>
              <Link to="/Ai-Design">
                <li>AI Design</li>
              </Link>
              <Link to="/chevy-journey">
                <li>Chevy Journey</li>
              </Link>
              <Link to="/ERA">
                <li>ERA Mobile Wallet</li>
              </Link>
              <Link to="/Dream-Garage">
                <li>Dream Garage</li>
              </Link>
              <Link to="/Kia-Kids">
                <li>Kia Kids</li>
              </Link>
              <Link to="/Designerspen">
                <li>Designerspen</li>
              </Link>
              <Link to="/sketch-book">
                <li>Sketchbook</li>
              </Link>
              <Link to = '/Nvidia'>
                <li>Project Portal</li>
              </Link>
              <Link to = '/Mugen'>
                <li>Mugen Coll</li>
              </Link>
            </ul>
          </div>
        );
    }
}

export default ProjectFooter
