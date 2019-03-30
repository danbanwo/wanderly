import axios from 'axios';
import { history } from '../routes/routes';


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

const user_logout = (user) =>({
  type: "USER_LOGOUT",
  user
})

export const userLogin = (info) => (
  (dispatch) => {
    axios.post('/login', info)
    .then((user) => {
  		dispatch(user_login(user.data))
    })
		.then(() => {
			history.push('/profile')
		})
  }
);

export const userSignUp = (info) => (
  (dispatch) => {
    axios.post('/signup', info)
    .then((user) => {
      dispatch(user_signup(user.data))
    })
		.then(() => {
			history.push('/intro')
		})
  }
);

export const userLogout = () =>
  (dispatch) => {
   axios.get('/logout')
    .then((user) => {
      history.push('/')
      dispatch(user_logout(user))
    })
  }
