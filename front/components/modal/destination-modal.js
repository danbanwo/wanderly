import React, { Component } from 'react';
import '../../styles/modal.css'

class DestinationModal extends Component {


  render() {
    return (
      <div id='modal-outer'>
        <div id='modal-middle'>
          <div id='modal-inner'>
            <button id='close'>x</button>
            <span>Hello from the modal component!</span>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationModal;
