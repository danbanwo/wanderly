import React from 'react';
import ReactDOM from "react-dom";
import {browserHistory, IndexRoute, Router, Route} from 'react-router';


//import components
// import Map from './map/map';
import Profile from './profile/profile';
import SignUp from './signup/signup.jsx';


let App = React.createClass({
  render() {
    const location = {
      lat: 21.32455847469097,
      lng: -157.92503356933594
    }
    return(
      <div>
        <h1>Welcome to Wanderly!</h1>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/signup' component={SignUp}/>
    <Route path='/home' component={Profile} />
  </Router>,
  document.getElementById('root')
)
