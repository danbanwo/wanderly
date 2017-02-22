import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    //Render this is pathname is either '/', login or signup
     const { pathname } = this.props.routing
    if(pathname === '/signup') {
      return (
        <div id='loggedout-navbar'>
          <img src='#' />
          <button><Link to='signup'>SignUp</Link></button>
        </div>
      )
    } else if(pathname === '/') {
      return (
        <div id='loggedout-navbar'>
          <img src='#' />
          <button onClick={this.props.loginPop}>Login</button>
          <button><Link to='signup'>SignUp</Link></button>
        </div>
      )
    } else {
        return (
          <div id='login-navbar' style={{background: 'yellow', height: '8vh', display: 'flex',
            flexDirection: 'row', justifyContent: 'spaceBetween'
          }}>
            <img style={{height: 20}} src='#' />
            <div className="dropdown" style={{background: 'red', display: 'flex', flexDirection: 'row', height: 20}}>
              <button className="dropbtn">Daniel</button>
              {/* {this.props.profile.first_name} */}
              <div className="dropdown-content">
                <Link href="#">Log out</Link>
              </div>
            </div>
          </div>
        )
      }
    }
}

export default Navbar
