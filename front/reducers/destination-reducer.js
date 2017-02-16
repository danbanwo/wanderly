const defaultState = {
  destinations: []
};

const destinationReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PROFILE': {
      return {...state, destinations: action.destData}
      break;
    }
    default: return state
  }
}

export default destinationReducer;
