import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class UploadComponent extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit= (e) => {
		e.preventDefault()
		let form = document.getElementById('form')
		var fileInput = document.getElementById('file');
		var file = fileInput.files[0];
		var formData = new FormData(form);
		formData.append('file', file);
		this.props.uploadImage(formData)
	}

	render() {
    const { pathname } = this.props.pathname
    if(pathname === '/uploadpic') {
  		return (
  			<div className="uploadContainer">
  				<form onSubmit={this.handleSubmit} id='form'>
  					<input id="file" type="file" name="upload" multiple/>
            <input className="btn btn-default" type="submit" value="Upload photo"/>
  				</form>
  			</div>
  		)
    } else {
  		return (
  			<div className="uploadContainer">
  				<form action="/api/profile/upload" encType="multipart/form-data" method="post">
  					<input id="file" type="file" name="upload" multiple/>
  				</form>
  			</div>
  		)
    }
  }
};

export default UploadComponent;
