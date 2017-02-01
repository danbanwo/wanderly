import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, IndexRoute, Router, Route} from 'react-router'


let App = () => (
  render() {
    return(
      <div>
        <h1>Welcome to Wanderly!</h1>
      </div>
    )
  }
)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)
