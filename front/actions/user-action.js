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
      console.log('I AM THE USER!!! ===>>>', user.data)
      dispatch(user_login(user.data))
    })
  }
);

//create a axios call for user-signup
export const userSignUp = () => (
  (dispatch) => {
    axios.post('/signup')
    .then((user) => {
      dispatch(user_signup(user))
    })
  }
);
