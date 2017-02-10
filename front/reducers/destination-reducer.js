const defaultState = {
  fetching: false,
  fetched: false,
  error: false,
  destinations: []
};

const destinationReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_DESTINATION_PENDING': {
      return {...state, fetching: true }
      break;
    }
    case 'GET_DESTINATION_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        destinations: state.destinations.concat(action.payload.data)
       }
      break;
    }
    case 'GET_DESTINATION_REJECTED': {
      return {...state, fetching: false, error: true}
      break;
    }
    default: return state
  }
}

export default destinationReducer;
