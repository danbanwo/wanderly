import axios from 'axios';

export const getWanderspots = () => (
  (dispatch) => {
  	//the correct API call would be to /api/destination/itinerary
    dispatch({type: "GET_WANDERSPOTS", data: axios.get('/api/wanderspot')})
  }
);


