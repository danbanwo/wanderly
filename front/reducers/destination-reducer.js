const defaultState = {
  destinations: []
};

const destinationReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PROFILE': {
      return {...state, destinations: action.destData}
      break;
    }
    case 'GET_DESTINATION': {
      return {...state, destinations: action.destData}
      break;
    }
    case 'USER_LOGIN':
      return {...state, destinations: action.destData}
    default: return state
  }
}

export default destinationReducer;
