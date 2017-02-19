import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//import components/containers below:
import { App, Destination, destinationContainer, profileContainer, mapContainer, Profile, UploadPic, UploadBio, UploadIntro, itineraryContainer,} from '../components';

const Routes = (props) => (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='home' component={profileContainer} />
        <Route path='map' component={mapContainer} />
        <Route path='destination' component={destinationContainer} />
        <Route path='itinerary/:destId' component={itineraryContainer} />
        <Route path='createprofile' component={UploadPic}/>
        <Route path='createbio' component={UploadBio}/>
        <Route path='createintro' component={UploadIntro}/>
      </Route>
    </Router>
  )


export default Routes;

//
//