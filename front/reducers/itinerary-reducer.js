const defaultState = {
  wanderspots: []
};

const itineraryReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_WANDERSPOTS':
      return Object.assign({}, state, state.wanderspots.concat(action.data))
      break;

    default:
      return state;
  }
}

export default itineraryReducer;
