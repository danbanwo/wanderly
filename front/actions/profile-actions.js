import axios from 'axios';
import store from '../store/store'

const profileData = (profile) => {
  return {
    type: 'GET_PROFILE',
    data: profile,
    destData: profile.Destinations
  }
}

//REDUX---THUNK
//Returns a single profile
export const getProfile = (id) => {
   return (dispatch) => {
    axios.get('api/profile/'+id)
    .then((profile) => {
      dispatch(profileData(profile.data))
    })
  }
}


//------------------------------------------------//
const user_auth = (data) => ({
	type: "USER_LOGIN",
	data: data,
	profileData: data.Profile,
	destData: data.Profile.Destinations
})

export const userAuth = () => (
  (dispatch) => {
    axios.get('/')
    .then((user) => {
  		dispatch(user_auth(user.data))
    })
		// .then(() => {
		// 	history.push('/')
		// })
  }
);
