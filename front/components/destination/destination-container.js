import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions below:
import { getProfileDestinations } from '../../actions/destination-actions';

//import component here:
import Destination from './destination';


const mapStateToProps = (state) => ({
  destinations: state.destinationReducer
})

const matchDispatchToProps = (dispatch) => ({
  userDestinations: bindActionCreators(getProfileDestinations, dispatch)
})

export default connect(mapStateToProps, matchDispatchToProps)(Destination);
