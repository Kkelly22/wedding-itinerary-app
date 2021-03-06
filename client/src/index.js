import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';

import './index.css';
import App from './App';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render((
  <Provider store={store}>
  	<App/>
  </Provider>),
  document.getElementById('root')
);


serviceWorker.unregister();
