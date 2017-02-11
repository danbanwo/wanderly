const defaultState = {};

const profileReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_PROFILE': {
      return Object.assign({}, state, action.data)
      break;
    }
    default: return state
  }
};

export default profileReducer;
