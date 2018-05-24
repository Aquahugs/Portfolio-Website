import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import '../stylesheets/Navbar.css'


const navStyle = {
margin: 'auto'

};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="NavBar" >
        <nav style = {navStyle} className ="navbar navbar-expand-lg navbar-light ">
        <Link to="/">
          <a className ="navbar-brand" href="#">
            <span className = "subtext2">Jordan Taylor</span>
            <span className = "subtext">Portfolio website </span>
          </a>
        </Link>

        <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarNav">
          <ul className ="navbar-nav">
            <li className ="nav-item active">
              <Link to="/">
                <a className ="nav-link" href="#">
                  Work
                  <span className ="sr-only">
                  (current)
                  </span>
                </a>
              </Link>
            </li>
            <li className ="nav-item">
              <Link to="About">
                <a className ="nav-link" href="#">About</a>
              </Link>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
