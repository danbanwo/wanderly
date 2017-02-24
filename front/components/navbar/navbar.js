import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../styles/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
  this.props.action()
  }

  render() {
  const { pathname } = this.props.routing
    if(pathname === '/') {
      return (
        <div className='loggedout-navbar navbar'>
          <div className="parent-logo">
            <div className='logo-nav '></div>
          </div>
          <div className='buttons'>
            <button className='login-link button-log one' onClick={this.props.loginPop}>Login</button>
          </div>
       </div>
      )
      } else {
          return (
            <div className='login-navbar navbar'>
              <div className="parent-logo">
                <div className='logo-nav '></div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">{this.props.profile.first_name}</button>
                <div className="dropdown-content">
                  <button onClick={this.handleClick}>Log out</button>
                </div>
              </div>
            </div>
          )
      }
    }
  }

export default Navbar
