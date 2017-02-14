import React from 'react';
import axios from 'axios';

import '../../styles/uploadPic.css';

const UploadPic = React.createClass({

	render(){
		return(
		<div>
		<center>
		<h1> Welcome, traveler!</h1>
		<h3> Add a profile pic so friends can recognize you </h3>


		<form action="/api/profile/upload" encType="multipart/form-data" method="post">
			<input id="file" type="file" name="upload" multiple/>
			<input id="uploadbtn" type="submit" value="Upload photo"/>
		</form>
		<a href="http://localhost:3000/home" id="skip">Skip this step</a>

		</center>

		</div>
		)
	}
});

export default UploadPic;