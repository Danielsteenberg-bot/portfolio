import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nav.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Nav from './Nav';
import About from './About';
import Test from './Test';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
