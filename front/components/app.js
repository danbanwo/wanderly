import React, { Component } from 'react';

const App = (props) => {
  return(
    <div>
    	<h1> Welcome to Wanderly! </h1>
      	{props.children}
    </div>
  )
}

export default App;
