import 'eventsource-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import TBApp from './components/app';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './store';

/* eslint-disable import/default */
render(
  <Provider store={store}>
    <TBApp />
  </Provider>,
  document.getElementById('app')
);
