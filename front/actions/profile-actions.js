import axios from 'axios';
import {browserHistory as history} from 'react-router';

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
const profileItem = (data) => {
  return {
    type: 'ADD_PROFILE_ITEM',
    payload: data
  }
}

export const addProfileItem = (profile) => {
  return (dispatch) => {
    dispatch(profileItem(profile))
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

//------------------------------------------------//
const newProfile = (data) => ({
  type: 'NEW_PROFILE',
  payload: data
  })

export const submitProfile = (data) => {
  return (dispatch) => {
    axios.post('/api/profile', data)
    .then((response) => {
      dispatch(newProfile(response))
      console.log(response)
    })
    .then(() => {
      history.push('/profile')
    })
  }
}

const addProfileImage = (data) => {
  return {
    type: 'ADD_PROFILE_IMAGE',
    payload: data.imagePath
  }
}

export const uploadImage = (form) => {
  return (dispatch) => {
    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post("api/profile/upload", form)
    .then((imagePath) => {
        console.log(imagePath)
      dispatch(addProfileImage(imagePath.data))
    })
    .then(() => {
      history.push('/bio')
    })
  }
}
