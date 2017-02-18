import axios from 'axios';

const user_login = (data) => ({
	type: "USER_LOGIN",
	data: {...data}
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
    return  axios.post('/login', info)
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

export const userLogout = () =>(
  (dispatch) => {
   return axios.get('/logout')
    .then((user) => {
      dispatch(user_logout(user))
      })
    }
  )
