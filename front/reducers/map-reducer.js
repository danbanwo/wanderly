const defaultState = {
  markers: []
};

const mapReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'ADD_MARKERS': {
      return {...state, markers: action.payload.data}
      break;
    }
    default: return state;
  }
}

export default mapReducer;
