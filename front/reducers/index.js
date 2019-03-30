import React from 'react';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


//import reducers here:
import mapReducer from './map-reducer';
import itineraryReducer from './itinerary-reducer';
import destinationReducer from './destination-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';


const allReducers = combineReducers({
//Upon import, reducers should go below:
  destinations: destinationReducer,
  map: mapReducer,
  itinerary: itineraryReducer,
  profile: profileReducer,
  routing: routerReducer,
  user: userReducer
});

export default allReducers;
