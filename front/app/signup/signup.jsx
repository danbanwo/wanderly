import React, { Component } from 'react';




const SignUp = (props) =>{
	return (
		<div>
		<center>
			<h1>SIGNUP NOW!</h1>
			<h3>to share your adventures & follow others</h3>
			<form>
				Email: <input type="text"></input><br/>
				Password:<input type="password"></input><br/>
				Confirm Password:<input type="password"></input><br/>
				<input type="submit" value="Get Started"/>
				</form>
				Already Have an account?  <a href="http://localhost:3000/">Login</a>
		</center>
		</div>
	)
}

export default SignUp; 