import React, { Component } from 'react';
import Navbar from './navbar/container';

const App = (props) => {
  return(
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default App;
