const defaultState = {
  wanderspots: []
};

const itineraryReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_WANDERSPOTS': 
      return state
      break;
    case 'GET_WANDERSPOTS_FULFILLED':
      return Object.assign({}, state, state.wanderspots.concat(action.data))
      break;
    default:
      return state;
      break;
  }
}

export default itineraryReducer;
