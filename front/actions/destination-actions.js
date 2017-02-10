import axios from 'axios';

export const getProfileDestinations = (id) => (
  (dispatch) => {
    dispatch({type: 'GET_DESTINATION', payload: axios.get('/api/destination/profile/'+id)})
  }
)
