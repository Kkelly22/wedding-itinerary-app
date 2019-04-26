import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import manageAppointments from './reducers/manageAppointments';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(manageAppointments, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render((
  <Provider store={store}>
  	<Router>
  		<React.Fragment>
      	<Route path="/" render={App} />
    	</React.Fragment>
  	</Router>
  </Provider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
