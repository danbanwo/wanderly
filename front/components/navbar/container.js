import { connect } from 'react-redux';
import Navbar from '../navbar/navbar';
import { userLogout } from '../../actions/user-action'
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ profile }) => ({
  profile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userLogout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);