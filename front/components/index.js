import React from 'react';

//import components here:
import App from './app';
import Destination from './destination/destination';
import Profile from './profile/profile';
import Wandermap from './map/map';
import DestinationModal from './modal/destination-modal';
import Login from './user/login';
import Signup from './user/signup';
import Spot from './itinerary/spot';

//import containers here:
import mapContainer from './map/map-container';
import createProfileContainer from './profile/create-container';
import destinationContainer from './destination/destination-container';
import profileContainer from './profile/profile-container';
import itineraryContainer from './itinerary/itinerary-container';
import landingPageContainer from './landingpage/landingpagecontainer';
import userContainer from './user/user-container';
import spotContainer from './itinerary/spot-container';

//export all components and containers here:
export {
  App,
  createProfileContainer,
  Destination,
  destinationContainer,
  DestinationModal,
  itineraryContainer,
  landingPageContainer,
  Login,
  mapContainer,
  Profile,
  profileContainer,
  userContainer,
  Signup,
  Wandermap,
  spotContainer
}
