import React, { Component } from 'react';

class LandingLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    this.props.login(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div className='popbox'>
      <p>Sign In</p>
        <label name='email'>
          <input className='input-pop' name='email' type='text' placeholder='Email' onChange={this.handleChange}></input>
        </label>
        <label name='password'>
          <input className='input-pop' name='password' type='password' placeholder='Password' onChange={this.handleChange}></input>
        </label>
        <input  className='button-pop' type='button' value='sign in' onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

export default LandingLogin;
