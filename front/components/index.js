import React from 'react';

//import components here:
import App from './app';
import Destination from './destination/destination';
import Profile from './profile/profile';
import Login from './user/login';
import Signup from './user/signup';
import UploadPic from './profile/uploadPic';
import Spot from './itinerary/spot';

//import containers here:
import mapContainer from './map/map-container';
import destinationContainer from './destination/destination-container';
import profileContainer from './profile/profile-container';
import itineraryContainer from './itinerary/itinerary-container';
import userContainer from './user/user-container';
import spotContainer from './itinerary/spot-container';

//export all components and containers here:
export {
  App, 
  Destination, 
  destinationContainer, 
  itineraryContainer, 
  Login, 
  mapContainer, 
  Profile, 
  profileContainer, 
  UploadPic, 
  userContainer,
  Signup, 
}
