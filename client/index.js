import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './features/store'


render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('app'),
);
