import axios from 'axios';

export const test = () => (
  (dispatch) => {
    dispatch({type: 'test', payload: 'test payload'})
  }
);

export const addMarkers = () => (
  (dispatch) => {
    dispatch({type: "ADD_MARKERS", payload: axios.get('/api/itinerary')})
  }
);
