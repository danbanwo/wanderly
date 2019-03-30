import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from '../navbar/navbar'
import LandingLogin from '../landingpage/landinglogin';
import { render } from 'react-dom';
import '../../styles/landing.css';
import '../../styles/login-nav.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  loginPop = () => {
    render(<LandingLogin login={this.props.login}/>, document.getElementById('login-popup'))
  }

  render() {
    return (
      <div className='landingpage'>
        <div className='login__block-wrapper'>
          <div id='login-popup'></div>
          <div className='landingpage-logo'>

            <section className='login__block'>
              <div className='logo-land'></div>
              <button id='join'><Link id='join' to='/signup'>Join</Link></button>
              <div className='box-div'>
                <p id='p'>Already have an account? <Link to='/login' className='signup-link'>Sign In</Link></p>
              </div>
            </section>
          </div>


        </div>
      </div>
    );
  }
}

export default LandingPage;
