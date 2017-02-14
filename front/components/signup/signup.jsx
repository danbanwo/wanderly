import React from 'react';
import axios from 'axios';


const SignUp = React.createClass({
	getInitialState(){
		return({first_name: '', last_name:'', gender: '',age:'',country_origin:'', catch_phrase:''})
	},

	handleInputChange(e){
		this.setState({[e.target.name]: e.target.value})
	},

	createNewUser(e){
		axios.post('/api/profile/', this.state)
	},

	render(){
		return(
			<div>
				<center>
					<h1> Start Your Adventure At Wanderly ! </h1>
					<form onSubmit={this.createNewUser}>
					FirstName:<input name='first_name' type="text" onChange={this.handleInputChange}></input><br/>
					LastName:<input name='last_name' type="text" onChange={this.handleInputChange}></input><br/>
					Age:<input name='age' type="text" onChange={this.handleInputChange}></input><br/>
					Gender:<input name='gender' type="text" onChange={this.handleInputChange}></input><br/>
					Country origin: <input name='country_origin' type="text" onChange={this.handleInputChange}></input><br/>
					Tell us why you love traveling!<input name='catch_phrase' type="text" onChange={this.handleInputChange}></input><br/>
					<input type="submit" value="submit"></input>
					</form>
				</center>
			</div>
		)
	}
});


export default SignUp;
