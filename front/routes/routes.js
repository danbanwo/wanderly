import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, SignUp, Profile, mapContainer } from '../components';

const Routes = (props) => (
    <Router history={browserHistory}>
      <Route path='signup' component={SignUp}/>
      <Route path='/' component={App}>
        <Route path='home' component={Profile} />
      </Route>
    </Router>
  )


export default Routes;
