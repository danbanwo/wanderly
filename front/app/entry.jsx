var React = require('react')
var ReactDOM = require("react-dom")
import {browserHistory, IndexRoute, Router, Route} from 'react-router'


let App = React.createClass({
  render() {
    return(
      <div>
        <h1>Welcome to Wanderly!</h1>
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
