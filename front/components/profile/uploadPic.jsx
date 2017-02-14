import React from 'react';
import axios from 'axios';

const UploadPic = React.createClass({
	render(){
		return(
		<div>
		<h1> Welcome, traveler!</h1>
		<h3> Add a profile pic so friends can recognize you </h3>

		<form action="/api/profile/upload" encType="multipart/form-data" method="post">
			<input type="file" name="upload" multiple/>
			<input type="submit" value="Upload"/>
		</form>

		<button>Upload photo</button>
		<a href="http://localhost:3000/api/profile/home" id="skip">Skip this step</a>


		</div>
		)
	}
});

export default UploadPic;