import React from 'react';
import axios from 'axios';

import '../../styles/uploadPic.css';

const UploadPic = React.createClass({

	render(){
		return(
		<div>

		<div className="uploadContainer">
		<center>
		<h1 className="title"> Welcome, traveler!</h1>
		<p id="subTitle"> Add a profile pic so friends can recognize you </p>


		<form action="/api/profile/upload" encType="multipart/form-data" method="post">
			<input id="file" type="file" name="upload" multiple/>
			<input className="btn btn-default" type="submit" value="Upload photo"/>
		</form>
		<a href="http://localhost:3000/createbio" id="skip">Skip this step</a>

		</center>
		</div>

		</div>
		)
	}
});

export default UploadPic;