const defaultState = null;

const mapReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'test': {
      //We want to return a copy of the update state
      //Object.assign({}, state, action.payload) or
      //use the spread operator as indicated below
      return {...state, test: action.payload}
      break;
    }
    case 'test-2': {
      return Object.assign({}, state, action.payload)
      break;
    }
    default: return state;
  }
}

export default mapReducer;
