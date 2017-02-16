 import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:

import { App, Destination, destinationContainer, profileContainer, mapContainer, Profile, itineraryContainer, UploadPic, userContainer} from '../components';


const Routes = (props) => (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='login' component={userContainer} />
        <Route path='signup' component={userContainer} />
        <Route path='home' component={profileContainer} />
        <Route path='map' component={mapContainer} />
        <Route path='destination' component={destinationContainer} />
        <Route path='itinerary/:destId' component={itineraryContainer} />
        <Route path='createprofile' component={UploadPic}/>
      </Route>
    </Router>
  )


export default Routes;
