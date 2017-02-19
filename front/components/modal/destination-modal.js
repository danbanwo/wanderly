import React, { Component } from 'react';
import SpotForm from '../itinerary/spot'
import '../../styles/modal.css'

class DestinationModal extends Component {


  render() {
    return (
      <div id='modal-outer'>
        <div id='modal-middle'>
          <div id='modal-inner'>
            <button id='close'>x</button>
            <SpotForm />
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationModal;
