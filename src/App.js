import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'



import asyncComponent from './components/AsyncComponent';
import Home from './components/home';
import CoinBase from './components/CoinBase';
import ChevyJourney from './components/ChevyJourney';
import SketchBook from './components/SketchBook';
import Designerspen from './components/Designerspen';
import AiDesign from './components/AiDesign';
import Mugen from './components/Mugen';
import DreamGarage from './components/DreamGarage';
import Navbar from './components/Navbar';
import Era from './components/Era';
import Nvidia from './components/Nvidia';
import KiaKids from './components/KiaKids';
import About from './components/About';

import ScrollToTop from './shared/ScrollToTop';


import './stylesheets/Designerspen.css';
import './stylesheets/SketchBook.css';
import './stylesheets/AiDesign.css';
import './stylesheets/App.css';
import './stylesheets/CoinBase.css';


import MediaQuery from 'react-responsive';
// Lazy loading

const CoinBase2 = asyncComponent(() =>
  import('./components/CoinBase').then(module => module.default)
);
const ChevyJourney2 = asyncComponent(() =>
  import('./components/ChevyJourney').then(module => module.default)
);
const SketchBook2 = asyncComponent(() =>
  import('./components/SketchBook').then(module => module.default)
);

const Designerspen2 = asyncComponent(() =>
  import('./components/Designerspen').then(module => module.default)
);

const AiDesign2 = asyncComponent(() =>
  import('./components/AiDesign').then(module => module.default)
);

const DreamGarage2 = asyncComponent(() =>
  import('./components/DreamGarage').then(module => module.default)
)

const Era2 = asyncComponent(() =>
  import('./components/Era').then(module => module.default)
)

const mugen2 = asyncComponent(() =>
  import('./components/Mugen').then(module => module.default)
)

const Nvidia2 = asyncComponent(() =>
  import('./components/Nvidia').then(module => module.default)
)

const KiaKids2 = asyncComponent(() =>
  import('./components/KiaKids').then(module => module.default)
)
class App extends Component {
  render() {
    return (
      <Router>
      <ScrollToTop>
        <div className="App">
          <Grid>
            <Col xs = '12'>
              <Navbar/>
            </Col>
          </Grid>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/coinbase" exact component = {CoinBase}/>
          <Route path = "/chevy-journey" exact component = {ChevyJourney}/>
          <Route path = "/sketch-book" exact component = {SketchBook}/>
          <Route path = "/Designerspen" exact component = {Designerspen}/>
          <Route path = "/Ai-Design" exact component = {AiDesign}/>
          <Route path = "/Dream-Garage" exact component = {DreamGarage}/>
          <Route path = "/Era" exact component = {Era}/>
          <Route path = "/Mugen" exact component = {Mugen}/>
          <Route path = "/Nvidia" exact component = {Nvidia}/>
          <Route path = "/Kia-Kids" exact component = {KiaKids}/>
          <Route path = "/About" exact component = {About}/>

        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
