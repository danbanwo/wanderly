import React, {Component} from 'react';
import '../../styles/user.css';

class Signup extends Component {
	constructor(props){
		super(props)
		this.state =  {email: '', password: ''}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.action(this.state)
	}

	handleChange = (key, e) => {
		this.setState({[key]: e.target.value})
	}

	render = () => {
		const {email, password} = this.state
		return(
			<div>
				<div className='main-container signup'>
					<div>
						<img src="../../views/images/Wanderly-Logo.svg" alt="Wanderly Logo" />
					</div>
			    		<div className="box">
						  	<div className="heading">
						    	<h3 className="title">Register!</h3>
						 	</div>
						  	<div className="panel-body">
									<form className="form-control maindiv" onSubmit={this.handleSubmit} >
										<div className="form-group">
									
										<input className="form-control txt" type='email' value={email} onChange={this.handleChange.bind(this,"email")} placeholder="  Your email"/>
										</div><br />
											<div className="form-group">
										
										<input className="form-control txt" type='Password' value={password} onChange={this.handleChange.bind(this, "password")} placeholder="  Password"/>
										</div><br />
										<input className="sub" type='submit' value='Signup!'/>
									</form>
						    </div>
						</div>
	
		
			</div>
		</div>
		)
	}
}


export default Signup
