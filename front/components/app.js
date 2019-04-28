import React, { Component } from 'react';
import Navbar from './navbar/navbar';

const App = (props) => {
  console.log(props)
  return(
    <div>
      <Navbar pathname={props.location.pathname}/>
      {props.children}
    </div>
  )
}

export default App;
