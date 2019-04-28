 import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, createProfileContainer, Destination, DestinationModal, destinationContainer, profileContainer,
  landingPageContainer, UploadPic, UploadBio, UploadIntro, userContainer, mapContainer, Profile, SignUp, spotContainer, itineraryContainer} from '../components';
import store from '../store/store';
import { syncHistoryWithStore } from 'react-router-redux';


const history = syncHistoryWithStore(browserHistory, store)

const Routes = (props) => (
    <Router history={history}>
      <Route path='/' component={landingPageContainer} />
      <Route path='/login' component={userContainer} />
      <Route path='signup' component={userContainer} />
            {/* <Route path='/' component={App}> */}
      <Route component={profileContainer}>
        <Route path='/profile' component={destinationContainer}/>
        <Route path='itinerary/:destId' component={itineraryContainer} />
      </Route>
        <Route path='intro' component={createProfileContainer}/>
        <Route path='uploadpic' component={createProfileContainer}/>
        <Route path='bio' component={createProfileContainer}/>
    </Router>
  )


export default Routes;

//
//
