import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Login from "./login.js"
import SignUp from "./signup.js"
import {userLogin, userSignUp} from '../../actions/user-action.js'

class userContainer extends Component {
	constructor(props){
		super(props)
	}	

  getLogIn = () => {
  	return <Login user={this.props.user} action={this.props.login} home={this.props.navHomepage} />
  }

  getSignUp = () => {
  	return <SignUp user={this.props.user} action={this.props.signup} />
  }

  navHomepage = (route) => (
  	 this.props.router.push(route)
  )

  render(){
  	return(
  		//ternary operator
  		this.getLogIn()
  		)
  }

}

const mapStateToProps = state => {
	return {user: state.userReducer}
}

const mapDispatchToProps= (dispatch)=>{
	return{
		login: bindActionCreators(userLogin, dispatch),
		signup: bindActionCreators(userSignUp, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(userContainer);
