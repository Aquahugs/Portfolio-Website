
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CoinBase from '../components/CoinBase';

export default () =>
<BrowserRouter>
  <Switch>
      <Route path='/coinbase2' exact component={CoinBase}></Route>
  </Switch>
</BrowserRouter>
