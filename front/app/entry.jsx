import React from 'react';
import ReactDOM from "react-dom";
import {browserHistory, IndexRoute, Router, Route} from 'react-router';
import Map from './map/map'



let App = React.createClass({
  render() {
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    return(
      <div>
        <h1>Welcome to Wanderly!</h1>
        <div style={{width: 'auto', height:300, background: 'red'}}>
          <Map center={location}/>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)
