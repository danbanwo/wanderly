import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions below:
import { getProfileDestinations } from '../../actions/destination-actions';
import { getDestSpots } from '../../actions/itinerary-actions.js';
import { getProfile } from '../../actions/profile-actions';

//import component here:
import Destination from './destination';


const mapStateToProps = (state) => ({
  destinations: state.destinationReducer,
  spots: state.itineraryReducer,
  profile: state.profileReducer,
  user: state.userReducer,
  routing: state.routing
})

const matchDispatchToProps = (dispatch) => ({
  userDestinations: bindActionCreators(getProfileDestinations, dispatch),
  getSpots: bindActionCreators(getDestSpots, dispatch),
  getProfile: bindActionCreators(getProfile, dispatch)
})

export default connect(mapStateToProps, matchDispatchToProps)(Destination);
