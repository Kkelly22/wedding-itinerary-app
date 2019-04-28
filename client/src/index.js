import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import managePlans from './reducers/managePlans';

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import './index.css';
import App from './App';
import Signup from './Signup';
import Login from './Login';

const store = createStore(managePlans, compose(applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render((
  <Provider store={store}>
  	<Router>
  		<React.Fragment>
      	<Route exact path="/" render={App} />
      	<Route path="/plans" render={App} />
      	<Route path="/signup" render={Signup} />
      	<Route path="/login" render={Login} />
    	</React.Fragment>
  	</Router>
  </Provider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
