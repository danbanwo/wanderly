import React from 'react';

//import components here:
import App from './app';
import Destination from './destination/destination';
import SignUp from './signup/signup';
import Profile from './profile/profile';
import Wandermap from './map/map';
import DestinationModal from './modal/destination-modal';

//import containers here:
import mapContainer from './map/map-container';
import destinationContainer from './destination/destination-container';
import profileContainer from './profile/profile-container';
import itineraryContainer from './itinerary/itinerary-container';


//export all components and containers here:
export {
  App, Destination, DestinationModal, destinationContainer, profileContainer, mapContainer, Profile, SignUp, itineraryContainer,
  Wandermap
}
