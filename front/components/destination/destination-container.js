import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions below:
import { getProfileDestinations as userDestinations } from '../../actions/destination-actions';
import { getDestSpots as getSpots } from '../../actions/itinerary-actions.js';
import { getProfile } from '../../actions/profile-actions';

//import component here:
import Destination from './destination';


const mapStateToProps = ({
  destinations,
  spots,
  profile,
  user,
  routing
}) => ({
  destinations,
  spots,
  profile,
  user,
  routing
})

const matchDispatchToProps = (dispatch) => bindActionCreators({
  userDestinations,
  getSpots,
  getProfile
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Destination);
