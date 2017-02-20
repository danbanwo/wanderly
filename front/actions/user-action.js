import axios from 'axios';
import {browserHistory as history} from 'react-router';


const user_login = (data) => ({
	type: "USER_LOGIN",
	data: data,
	profileData: data.Profile,
	destData: data.Profile.Destinations
})

const user_signup = (data) => ({
	type: "USER_SIGNUP",
	data
})

export const userLogin = (info) => (
  (dispatch) => {
    axios.post('/login', info)
    .then((user) => {
  		dispatch(user_login(user.data))
    })
		.then(() => {
			history.push('/')
		})
  }
);

export const userSignUp = (info) => (
  (dispatch) => {
    axios.post('/signup', info)
    .then((user) => {
      dispatch(user_signup(user.data))
    })
  }
);
