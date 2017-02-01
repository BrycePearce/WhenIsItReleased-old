import React from 'react';
import { render } from 'react-dom';
import ResultList from './ResultList';
import Logo from './static/logo.png'
import Key from './Key';
import Search from './Search'
import { Router, Route, hashHistory } from 'react-router'


render(<Router/>, document.getElementById('app'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))