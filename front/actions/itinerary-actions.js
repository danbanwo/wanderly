import axios from 'axios';

export const getDestSpots = (id) => {
	return (dispatch) => {
		axios.get('/api/wanderspot/itinerary/'+id)
		.then((spots) => {
			dispatch({type: 'GET_DEST_SPOTS', data: spots.data})
		})
	}
};

export const createSpot = (formData) => {
	return (dispatch) => {
		axios.post('/api/wanderspot/', formData)
		.then((response)=> {
			console.log('response:', response)
			dispatch({type: 'ADD_SPOT', spot: formData})
		})

  }
}