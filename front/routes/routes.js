import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, Destination, DestinationModal, destinationContainer, profileContainer, mapContainer, Profile, SignUp, itineraryContainer} from '../components';
import store from '../store/store';
import { syncHistoryWithStore } from 'react-router-redux';


const history = syncHistoryWithStore(browserHistory, store)

const Routes = (props) => (
    <Router history={history}>
      <Route path='signup' component={SignUp}/>
      {/* <Route path='/' component={App}> */}
      <Route component={profileContainer}>
        {/* <Route path='map' component={mapContainer} /> */}
        <Route path='/' component={destinationContainer}/>
        <Route path='itinerary/:destId' component={itineraryContainer} />
      </Route>
    </Router>
  )


export default Routes;
