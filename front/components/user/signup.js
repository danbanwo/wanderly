import React from 'react'

const Signup = React.createClass({
	getInitialState(){
		return {
			email: '',
			password: ''
		}
	},
	handleSubmit(e){
		e.preventDefault()
		this.props.signup(this.state)
		this.props.router.push('/')//routes
	},
	handleChange(key, e){
		this.setState({[key]: e.target.value})
	},
	render(){
		const {firstname, lastname, email, password} = this.state
		return(
			<div>
				<div className='container container1'>	
			    <div className="row">
					<div className="col-md-4 col-md-offset-4">
			    		<div className="panel panel-default">
						  	<div className="panel-heading">
						    	<h3 className="panel-title">Register!</h3>
						 	</div>
						  	<div className="panel-body">
									<form className="form-control maindiv1" onSubmit={this.handleSubmit} >
										<div className="form-group">
										Email:
										<input className="form-control" type='email' value={email} onChange={this.handleChange.bind(this,"email")} />
										</div><br />
											<div className="form-group">
										Password:
										<input className="form-control" type='Password' value={password} onChange={this.handleChange.bind(this, "password")} />
										</div><br /> 
										<input className="btn btn-lg  btn-block button1" type='submit' value='Signup!'/>
									</form>
						    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
})


export default Signup
