import axios from 'axios';

const user_login = (data) => ({
	type: "USER_LOGIN",
	data: {...data, route:'/home'}
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
