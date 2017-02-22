import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class UploadComponent extends Component {
	render() {
    const { pathname } = this.props.pathname
    if(pathname === '/uploadpic') {
  		return (
  			<div className="uploadContainer">
  				<form action="/api/profile/upload" encType="multipart/form-data" method="post">
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
