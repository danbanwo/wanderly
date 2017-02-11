const defaultState = {
  destinations: []
};

const destinationReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PROFILE': {
      return {...state, destinations: action.destData}
      break;
    }
    case 'GET_DESTINATION_FULFILLED': {
      return {
        ...state,
        destinations: action.payload.data
       }
      break;
    }
    default: return state
  }
}

export default destinationReducer;
