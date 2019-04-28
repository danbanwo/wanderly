const defaultState = {
  isAuth: false,
  profile: {
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
    return {...state, ...action.profileData, isAuth: true}
    break;

    case 'ADD_PROFILE_ITEM':
    let profile = {...state.profile, ...action.payload}
    return {...state, profile: profile}
    break;

    case 'ADD_PROFILE_IMAGE':
    let image = {...state.profile, image: action.payload}
    return {...state, profile: image}
    break;

    case 'NEW_PROFILE':
    return action.payload
    break;
    default: return state
  }
};

export default profileReducer;
