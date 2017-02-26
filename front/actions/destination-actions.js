import axios from 'axios';

//Thunk for getting profile with associated destinations
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

//Thunk for adding a destination to an associated profile
const add_Destination_action = (destination) => (
  {type: 'ADD_DESTINATION', payload: destination}
)

export const addDestination = (destinationForm) => (
  (dispatch) => {
    axios.post('/api/destination', destinationForm)
    .then((response) => {
      dispatch(add_Destination_action(response.data))
    })
  }
)
