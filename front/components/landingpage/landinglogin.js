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
    console.log(e.target.name, e.target.value)
  }

  handleSubmit = () => {
    this.props.login(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <label name='email'>
          <input name='email' type='text' placeholder='Email' onChange={this.handleChange}></input>
        </label>
        <label name='password'>
          <input name='password' type='password' placeholder='Password' onChange={this.handleChange}></input>
        </label>
        <input type='button' value='signin' onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

export default LandingLogin;
