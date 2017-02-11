import axios from 'axios';

const getDestinations = (destinations) => (
  {type: 'GET_DESTINATION', payload: destinations}
)

export const getProfileDestinations = (id) => (
  (dispatch) => {
    axios.get('/api/destination/profile/'+id)
    .then((destinations) => {
      dispatch(getDestinations(destinations.data))
    })
  }
)
