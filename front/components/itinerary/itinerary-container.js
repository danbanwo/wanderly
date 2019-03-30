import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { getDestSpots as getSpots } from '../../actions/itinerary-actions.js';
import { getProfile } from '../../actions/profile-actions'

import Wanderspot from './wanderspot.jsx';

const mapStateToProps = (state) => {
	return {
		destinations: state.destination,
		spots: state.itinerary,
		profile: state.profile,
		routing: state.routing
	}
};

const matchDispatchToProps = (dispatch) => bindActionCreators({
	getSpots,
	getProfile
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Wanderspot)
