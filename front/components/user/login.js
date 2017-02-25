import React, {Component} from 'react'
import { Link } from 'react-router';
import {browserHistory as history} from 'react-router';
import '../../styles/user.css';


class Login extends Component {
	constructor(props){
		super(props)
		this.state = {email: '', password: '' }
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(!this.state.email || !this.state.password) {
			alert('Please enter a valid email or password')
		} else {
		this.props.action(this.state)
		}
	}

	handleChange = (key, e) => {
		this.setState({ [key] : e.target.value })
	}
	render(){
		const { email, password } = this.state;
		return(
			<div className="main-container login">

					<div className='logo'>

					</div>

				<br />
				<div className=" box">
					<div className="heading" >
						 <h3 className="title">Sign In</h3>
					</div>
					<form className='maindiv' onSubmit={this.handleSubmit} >
		 			 <fieldset>
							<div className="form-group ">
								<input className="form-control txt" type='email' value={email} onChange={this.handleChange.bind(this,"email")} placeholder="Your email"/>
							</div>
							<br />
							<div className="form-group input">
								<input className="form-control txt"  type='Password' value={password} onChange={this.handleChange.bind(this, "password")} placeholder="Password" />
							</div>
							<br />
							<input className=" sub" type='submit' value='Log In'/>
						 </fieldset>
					</form>
			



					<p id='p'>Do not have an accout? <Link to='/signup' className='signup-link'>Sign Up!</Link></p>


				</div>
			</div>
		)
	}
}


export default Login
