import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { getProfile } from '../../actions/profile-actions'
import { addMarkers } from '../../actions/map-actions'
import Profile from './profile';

const mapStateToProps = (state) => ({
    profile: state.profileReducer,
    map: state.mapReducer,
    destinations: state.destinationReducer
  })

  const matchDispatchToProps = (dispatch) => ({
    getProfile: bindActionCreators(getProfile, dispatch),
    markers: bindActionCreators(addMarkers, dispatch)
  })

export default connect(mapStateToProps, matchDispatchToProps)(Profile)
