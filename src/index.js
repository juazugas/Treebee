
import 'eventsource-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* eslint-disable import/default */
render(
  <App />,
  document.getElementById('app')
);
