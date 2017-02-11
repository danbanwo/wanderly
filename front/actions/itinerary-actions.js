import axios from 'axios';

export const getDestSpots = (id) => {
	return (dispatch) => {
		axios.get('/api/wanderspot/itinerary/'+id)
		.then((spots) => {
			dispatch({type: 'GET_DEST_SPOTS', data: spots.data})
		})
	}
};
