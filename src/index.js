import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//assets
import  "./assets/css/assets.css"
import "./assets/js/rem"
import 'antd-mobile/dist/antd-mobile.css'; 

import {HashRouter,BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <HashRouter>
        <App />
  </HashRouter>,

  document.getElementById('root')
);

