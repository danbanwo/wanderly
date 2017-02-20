import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { getDestSpots } from '../../actions/itinerary-actions.js';
import { getProfile } from '../../actions/profile-actions'

import Wanderspot from './wanderspot.jsx';

const mapStateToProps = (state) => {
	return {
		destinations: state.destinationReducer,
		spots: state.itineraryReducer,
		profile: state.profileReducer,
		routing: state.routing
	}
};

const matchDispatchToProps = (dispatch) => {
	return {
		getSpots: bindActionCreators(getDestSpots, dispatch),
		getProfile: bindActionCreators(getProfile, dispatch)
	}
};

export default connect(mapStateToProps, matchDispatchToProps)(Wanderspot)
