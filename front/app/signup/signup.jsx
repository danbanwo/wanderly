import React from 'react';
import $ from 'jquery';


const SignUp = React.createClass({
getInitialState(){
	return({first_name: '', last_name:'', gender: '',age:'',country_origin:'', catch_phrase:''})
},
firstNameChange(e){
	this.setState({first_name: e.target.value})
},
lastNameChange(e){
	this.setState({last_name: e.target.value})
},
genderChange(e){
	this.setState({gender: e.target.value})
},
ageChange(e){
	this.setState({age: parseInt(e.target.value)})
},
originChange(e){
	this.setState({country_origin: e.target.value})
},
catchPhraseChange(e){
	this.setState({catch_phrase: e.target.value})
},
createNewUser(e){
	e.preventDefault();
	$.ajax({
		url: '/api/profile/',
		type:'POST',
		data: this.state
	})
	alert('You have now created an account with Wanderly! You can go login now. ')
},
	render(){
		return(
			<div>
			<center>
			<h1> Start You Adventure At Wanderly ! </h1> 
			<form submit={this.createNewUser}> 
			FirstName:<input type="text" value={this.first_name} onChange={this.firstNameChange}></input><br/>
			LastName:<input type="text" value={this.last_name} onChange={this.lastNameChange}></input><br/>
			Age:<input type="text" value={this.age} onChange={this.ageChange}></input><br/>
			Gender:<input type="text" value={this.gender} onChange={this.genderChange}></input><br/>
			Country origin: <input type="text" value={this.country_origin} onChange={this.originChange}></input><br/>
			Tell us why you love traveling!<input type="text" value={this.catch_phrase} onChange={this.catchPhraseChange}></input><br/>
			<input type="submit" value="submit"></input>
			</form> 
			</center>
			</div>
		)
	}
});


export default SignUp;