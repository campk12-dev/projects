//import './style.css';
import './index.css';
import './bootstrap.min.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let root  = document.querySelector('#root');

ReactDOM.render(
  <>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </>,
  root
); 
