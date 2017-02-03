import React from 'react';
import { render } from 'react-dom';
import Search from './Search'
import Details from './Details';
import { Router, Route, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Search} />
    <Route path="/Details" component={Details} />
  </Router>
), document.getElementById('app'))