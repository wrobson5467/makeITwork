import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import React from 'react';
import {Provider} from 'react-redux'


render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
