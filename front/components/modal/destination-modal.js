import React, { Component } from 'react';

const DestinationModal = () => {
  return (
    <div style={{height: '100vh', width: '100vw', position: 'absolute', display: 'flex', 'justify-content': 'center',
    'align-items': 'center'}}>
      <div style={{ height: '100vh', width: '100%',
      background: 'white', opacity: 0.7
      }}></div>
      <div style={{position: 'absolute', background: 'white',height: '500px', width: '300px'}}>
        Hello from the modal component!
      </div>
    </div>
  )
}

export default DestinationModal;
