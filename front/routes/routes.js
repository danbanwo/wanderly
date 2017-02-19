 import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, Destination, DestinationModal, destinationContainer, profileContainer,
  UploadPic, UploadBio, UploadIntro, userContainer, mapContainer, Profile, SignUp, spotContainer, itineraryContainer} from '../components';
import store from '../store/store';
import { syncHistoryWithStore } from 'react-router-redux';


const history = syncHistoryWithStore(browserHistory, store)

const Routes = (props) => (
    <Router history={history}>
      <Route path='login' component={userContainer} />
      <Route path='signup' component={userContainer} />
            {/* <Route path='/' component={App}> */}
      <Route component={profileContainer}>
        {/* <Route path='map' component={mapContainer} /> */}
        <Route path='/' component={destinationContainer}/>
        <Route path='itinerary/:destId' component={itineraryContainer} />
      </Route>
        <Route path='createprofile' component={UploadPic}/>
        <Route path='createbio' component={UploadBio}/>
        <Route path='createintro' component={UploadIntro}/>
        <Route path='createprofile' component={UploadPic}/>
        <Route path='spot/add/:destId' component={spotContainer} />
    </Router>
  )


export default Routes;

//
//