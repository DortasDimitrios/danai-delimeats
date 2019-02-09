import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import WhoWeAre from './components/WhoWeAre';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,document.querySelector('#root')
);



