const defaultState = {
  wanderspots: []
};

const itineraryReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_WANDERSPOTS': 
      return state
    case 'GET_WANDERSPOTS_FULFILLED':
      return Object.assign({}, state, state.wanderspots.concat(action.data))
    default:
      return state;
  }
}

export default itineraryReducer;
