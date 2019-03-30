import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { getProfileDestinations as userDestinations } from '../../actions/destination-actions';
import { addDestination } from '../../actions/destination-actions';
import { createSpot as addSpot } from '../../actions/itinerary-actions.js';
import { getProfile } from '../../actions/profile-actions';
import { userAuth } from '../../actions/profile-actions';
import { addMarkers as markers } from '../../actions/map-actions';
import { userLogout } from '../../actions/user-action'

import Profile from './profile';

const mapStateToProps = ({
  profile,
  map,
  destinations: {
    destinations
  },
  routing,
  itinerary: spots,
}) => ({
    profile,
    map,
    destinations,
    routing,
    spots,
  })

  const matchDispatchToProps = (dispatch) => bindActionCreators({
    getProfile,
    markers,
    userLogout,
    userDestinations,
    addDestination,
    addSpot,
  }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Profile)
