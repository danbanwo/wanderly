import React from 'react';
import axios from 'axios';

import '../../styles/uploadBio.css';

const UploadBio = React.createClass({
	render(){
		return(
		<div>
		<center>
		<h1> Welcome, traveler!</h1>
		<h3> Tell us a little more about yourself. </h3>

		<p> What types of travel do you like? </p>
			<button type="button">Category</button>
			<button type="button">Category</button>
			<button type="button">Category</button>
			<button type="button">Category</button>
			<button type="button">Category</button>
			<button type="button">Category</button>

		<p> Introduce yourself </p>

		<input type="text" placeholder="Write a brief intro..." className="bio"></input>

		<button type="button">All done!</button>

		<a href="http://localhost:3000/home" id="skip">Skip this step</a>
		</center>

		</div>
		)
	}
});

export default UploadBio;