import React, { Component } from 'react';
import SpotForm from '../itinerary/spot';
import UploadComponent from '../profile/uploadComponent';

import '../../styles/modal.css';

class DestinationModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='modal-outer'>
        <div id='modal-middle'>
          <div id='modal-inner'>
            <div className='closeModal'>
              <div id='close' onClick={this.props.closeButton}></div>
            </div>
            <div id='modal-text'>
              <UploadComponent pathname={this.props.pathname} />
              <SpotForm closeButton={this.props.closeButton} addSpot={this.props.addSpot} addDestination={this.props.addDestination} profile={this.props.profile} pathname={this.props.pathname} />
            </div>
       
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationModal;