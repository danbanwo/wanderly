import React, { Component } from 'react';
import SpotForm from '../itinerary/spot'
import '../../styles/modal.css'

class DestinationModal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id='modal-outer'>
        <div id='modal-middle'>
          <div id='modal-inner'>
            <button id='close' onClick={this.props.closeButton}>x</button>
            <SpotForm />
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationModal;
