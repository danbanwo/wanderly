import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
  this.props.action()
  }

  render() {
    console.log('THIS IS PROPS===>>>',this.props)
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
          <div id='login-navbar' style={{height: '8vh', display: 'flex',
            flexDirection: 'row', justifyContent: 'spaceBetween', borderBottom: 'black', borderColor: 'solid'
          }}>
            <img style={{height: 20}} src='#' />
            <div className="dropdown" style={{display: 'flex', flexDirection: 'row', height: 20}}>
              <button className="dropbtn">Daniel</button>
              {/* {this.props.profile.first_name} */}
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
