import axios from 'axios';

export const getWanderspots = () => (
	(dispatch) => {
		dispatch({type: 'GET_WANDERSPOTS', data: axios.get('/api/getWanderspot')})
		//this api call will have to change to populate specific destinations wanderspots
	}
)


