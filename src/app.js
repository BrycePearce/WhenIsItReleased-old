import React from 'react';
import { render } from 'react-dom';
import Search from './Search'
import { Router, Route, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Search}/>
  </Router>
), document.getElementById('app'))