const defaultState = {
  markers: []
};

const mapReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'test': {
      //We want to return a copy of the update state
      //Object.assign({}, state, action.payload) or
      //use the spread operator as indicated below
      return {...state, test: action.payload}
      break;
    }
    case 'ADD_MARKERS': {
      return {...state}
      break;
    }
    case 'ADD_MARKERS_FULFILLED': {
      return {...state, markers: state.markers.concat(action.payload.data)}
      break;
    }
    default: return state;
  }
}

export default mapReducer;
