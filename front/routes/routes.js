 import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, Destination, DestinationModal, destinationContainer, profileContainer,
  UploadPic, userContainer, mapContainer, Profile, SignUp, itineraryContainer} from '../components';
import store from '../store/store';
import { syncHistoryWithStore } from 'react-router-redux';

<<<<<<< HEAD
import { App, Destination, destinationContainer, profileContainer, mapContainer, Profile, itineraryContainer, UploadPic, userContainer, Spot, spotContainer} from '../components';
=======

const history = syncHistoryWithStore(browserHistory, store)
>>>>>>> 28a2811c1b58e76518146c8ead98947ab887df33

const Routes = (props) => (
    <Router history={history}>
      <Route path='login' component={userContainer} />
      <Route path='signup' component={userContainer} />
            {/* <Route path='/' component={App}> */}
      <Route component={profileContainer}>
        {/* <Route path='map' component={mapContainer} /> */}
        <Route path='/' component={destinationContainer}/>
        <Route path='itinerary/:destId' component={itineraryContainer} />
<<<<<<< HEAD
        <Route path='createprofile' component={UploadPic}/>
        <Route path='spot/add/:destId' component={spotContainer} />
=======
>>>>>>> 28a2811c1b58e76518146c8ead98947ab887df33
      </Route>
      <Route path='createprofile' component={UploadPic}/>
    </Router>
  )


export default Routes;
