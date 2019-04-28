import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions and component
import { addProfileItem } from '../../actions/profile-actions';
import { submitProfile } from '../../actions/profile-actions';
import { uploadImage } from '../../actions/profile-actions';

import UploadBio from './uploadBio';
import UploadIntro from './uploadIntro';
import UploadPic from './uploadPic';

class createProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = this.props.routing.locationBeforeTransitions
    if(pathname === '/intro') {
      return (
        <UploadIntro props={this.props} />
      )
    } else if(pathname === '/uploadpic') {
      return (
        <UploadPic props={this.props} />
      )
    } else {
      return (
        <UploadBio props={this.props} />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
  routing: state.routing,
  user: state.userReducer,
})

const matchDispatchToProps = (dispatch) => ({
  addItem: bindActionCreators(addProfileItem, dispatch),
  submitProfile: bindActionCreators(submitProfile, dispatch),
  uploadImage: bindActionCreators(uploadImage, dispatch),
})

export default connect(mapStateToProps, matchDispatchToProps)(createProfileContainer);
