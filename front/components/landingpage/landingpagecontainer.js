import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from '../../actions/user-action';
import LandingPage from './landingpage'


const mapStateToProps = (state) => ({
  routing: state.routing
})

const matchDispatchToProps = (dispatch) => ({
  login: bindActionCreators(userLogin, dispatch)
})

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage)
