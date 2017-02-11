import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { getDestSpots } from '../../actions/itinerary-actions.js';
import Wanderspot from './wanderspot.jsx';

const mapStateToProps = (state) => {
	return {spots: state.itineraryReducer}
};

const matchDispatchToProps = (dispatch) => {
	return {getSpots: bindActionCreators(getDestSpots, dispatch)}
};

export default connect(mapStateToProps, matchDispatchToProps)(Wanderspot)