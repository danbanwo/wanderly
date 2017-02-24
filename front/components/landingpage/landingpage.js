import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../navbar/navbar'
import LandingLogin from '../landingpage/landinglogin';
import { render } from 'react-dom';
import '../../styles/landing.css';

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

        <div className='landingpage'>
        <div id='login-popup'></div>
          <div className='logo-land'></div>
          <button id='join'><Link id='join' to='/signup'>Join</Link></button>
           <div className='box-div'> 
            <p id='p'>Already have an account? <Link to='/login' className='signup-link'>Sign In</Link></p>
           </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
