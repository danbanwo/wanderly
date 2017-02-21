import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../navbar/navbar'
import LandingLogin from '../landingpage/landinglogin';
import { render } from 'react-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  loginPop = () => {
    render(<LandingLogin login={this.props.login}/>, document.getElementById('login-popup'))
  }

  render() {
    return (
      <div>
        <Navbar loginPop={this.loginPop} routing={this.props.routing.locationBeforeTransitions}/>
        <div id='login-popup'></div>
          <h1>Hello from the landing page component</h1>
      </div>
    )
  }
}

export default LandingPage;
