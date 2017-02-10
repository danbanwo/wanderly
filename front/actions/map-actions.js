import axios from 'axios';

export const addMarkers = () => (
  (dispatch) => {
    dispatch({type: "ADD_MARKERS", payload: axios.get('/api/destination')})
  }
);
