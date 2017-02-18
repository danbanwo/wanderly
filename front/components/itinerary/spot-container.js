import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { createSpot } from '../../actions/itinerary-actions.js';
import SpotForm from './spot.jsx';

// const mapStateToProps = (state) => {
// 	return {newSpot: state.itineraryReducer}
// };

const matchDispatchToProps = (dispatch) => {
	return {addSpot: bindActionCreators(createSpot, dispatch)}
};

export default connect(null, matchDispatchToProps)(SpotForm)