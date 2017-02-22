const defaultState = {
  isAuth: false,
  profile: {
    first_name: '',
    last_name: '',
    gender: '',
    age: '',
    image: '',
    country_origin: '',
    catch_phrase: '',
    UserId: null,
    categories: []
  }
};

const profileReducer = (state=defaultState, action) => {
  switch(action.type) {
    // case 'GET_PROFILE': {
    //   return Object.assign({}, state, action.data)
    //   break;
    // }
    case 'USER_LOGIN':
    return {...state, ...action.profileData, isAuth: true}
    break;

    case 'ADD_PROFILE_ITEM':
    return {...state, ...action.profileData, isAuth: true}
    break;
    default: return state
  }
};

export default profileReducer;
