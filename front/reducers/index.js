import React from 'react';
import { combineReducers } from 'redux';

//import reducers here:
import mapReducer from './map-reducer';

const allReducers = combineReducers({
//Upon import, reducers should go below:
  mapReducer,
});

export default allReducers;
