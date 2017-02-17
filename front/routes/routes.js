import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, Destination, destinationContainer, profileContainer, mapContainer, Profile, SignUp, itineraryContainer, spotContainer} from '../components';

const Routes = (props) => (
    <Router history={browserHistory}>
      <Route path='signup' component={SignUp}/>
      <Route path='/' component={App}>
        <Route path='home' component={profileContainer} />
        <Route path='map' component={mapContainer} />
        <Route path='destination' component={destinationContainer} />
        <Route path='itinerary/:destId' component={itineraryContainer} />
        <Route path='spot/add/:destId' component={spotContainer} />
      </Route>
    </Router>
  )


export default Routes;
