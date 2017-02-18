import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { getProfile } from '../../actions/profile-actions'
import { addMarkers } from '../../actions/map-actions'
import { userLogout } from '../../actions/user-action'
import Profile from './profile';

const mapStateToProps = (state) => ({
    profile: state.profileReducer,
    map: state.mapReducer,
    destinations: state.destinationReducer,
    routing: state.routing,
    spots: state.itineraryReducer,
  })

  const matchDispatchToProps = (dispatch) => ({
    getProfile: bindActionCreators(getProfile, dispatch),
    markers: bindActionCreators(addMarkers, dispatch),
    userLogout: bindActionCreators(userLogout, dispatch)
  })

export default connect(mapStateToProps, matchDispatchToProps)(Profile)
