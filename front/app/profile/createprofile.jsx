import React from 'react';
import $ from 'jquery';


const createProfile = React.createClass({
getInitialState(){
	return({photo: '', fullName: '', gender: '',age:'',country_origin:'', catch_phrase:''})
},
fullNameChange(e){
	this.setState({first_name: e.target.value})
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
photoChange(e){
	this.setState({photo:e.target.value})
},
createNewUser(e){
	e.preventDefault();
	$.ajax({
		url: '/api/profile/',
		type:'POST',
		data: this.state
	})
	alert('Awesome! You have now joined Wanderly!')
},
	render(){
		return(
			<div>
			<center>
			<h1> Start You Adventure At Wanderly ! </h1> 

			<form onSubmit={this.createNewUser}> 
			FullName:<input type="text" value={this.first_name} onChange={this.firstNameChange}></input><br/>
			Age:<input type="text" value={this.age} onChange={this.ageChange}></input><br/>
			Gender:<input type="text" value={this.gender} onChange={this.genderChange}></input><br/>
			Country origin: <input type="text" value={this.country_origin} onChange={this.originChange}></input><br/>
			Tell us why you love traveling!<input type="text" value={this.catch_phrase} onChange={this.catchPhraseChange}></input><br/>
			</form>


			<form id="uploadForm" enctype="multipart/form-data" method="post">
			<input type="file" name="userFile"/>
			<input type="submit" value="Upload File" name="submit"/>

			</form>


			</center>
			</div>
		)
	}
});


export default createProfile;