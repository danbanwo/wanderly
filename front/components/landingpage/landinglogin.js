import React, { Component } from 'react';

class LandingLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'danbanwo@gmail.com',
      password: '1234'
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.name, e.target.value)
  }

  handleSubmit = () => {
    this.props.login(this.state)
  }

  render() {
    return (
      <div className='popbox'>
      <p>Sign In</p>
        <label name='email'>
          <input className='input-pop' name='email' type='text' placeholder='Email' onChange={this.handleChange} value={this.state.email}></input>
        </label>
        <label name='password'>
          <input className='input-pop' name='password' type='password' placeholder='Password' onChange={this.handleChange} value={this.state.password}></input>
        </label>
        <input  className='button-pop' type='button' value='sign in' onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

export default LandingLogin;
