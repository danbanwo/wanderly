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
