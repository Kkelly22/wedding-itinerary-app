import React from 'react';
import './App.css';
import PlansContainer from './containers/PlansContainer';
import Signup from './Signup';
import Login from './Login';
import love from './mandy-von-stahl-VDiGTEO0TYY-unsplash.jpg';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router> 
  		<Switch id="routes">
      	<Route exact path='/' component={PlansContainer} />
      	<Route exact path='/plans' component={PlansContainer} />
	      <Route exact path='/signup' render={Signup} />
	      <Route exact path='/login' render={Login} />
	      <Route exact path='/logout' render={Login} />
    	</Switch>
  	  </Router>
    </div>
  );
}


export default App;

