import React from 'react';

//import components here:
import App from './app';
import Destination from './destination/destination';
import Profile from './profile/profile';
import Login from './user/login';
import UploadPic from './profile/uploadPic';

//import containers here:
import mapContainer from './map/map-container';
import destinationContainer from './destination/destination-container';
import profileContainer from './profile/profile-container';
import itineraryContainer from './itinerary/itinerary-container';


//export all components and containers here:
export {
  App, Destination, destinationContainer, profileContainer, mapContainer, Profile, UploadPic, itineraryContainer, Login
}
