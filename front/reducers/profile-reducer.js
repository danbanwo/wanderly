const defaultState = {
  isAuth: false,
  profileInfo: {
    first_name: '',
    last_name: '',
    gender: '',
    age: 0,
    image: '',
    country_origin: '',
    catch_phrase: '',
    UserId: null,
    categories: []
  }
};

const profileReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'USER_LOGIN':
    return {...state, profileInfo: {...action.profileData}, isAuth: true}
    break;
    
    case 'USER_LOGOUT':
    return {isAuth: false}
    break;

    case 'ADD_PROFILE_ITEM':
    let profileInfo = {...state.profileInfo, ...action.payload}
    return {...state, profileInfo}
    break;

    case 'ADD_PROFILE_IMAGE':
    let updateProfileImage = {...state.profileInfo, image: action.payload}
    return {...state, profileInfo: updateProfileImage}
    break;

    case 'NEW_PROFILE':
    return action.payload
    break;
    default: return state
  }
};

export default profileReducer;
