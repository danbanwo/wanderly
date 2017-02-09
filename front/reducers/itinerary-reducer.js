const defaultState = {
  wanderSpots: []
};

const itineraryReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_WANDERSPOTS': {
      return {...state}
      break;
    }
    case 'ADD_MARKERS_FULFILLED': {
      //NEED HELP WITH THE RETURN... action.getWanderspot
      return {...state, wanderSpots: state.wanderSpots}
      break;
    }
    default: return state;
  }
}

export default itineraryReducer;
