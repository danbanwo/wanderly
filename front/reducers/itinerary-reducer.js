const defaultState = {
  wanderspotsArr: []
};

const itineraryReducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_DEST_SPOTS':
    // return {...state, wanderspotsArr: action.data}
      return Object.assign({}, state, {wanderspotsArr: action.data})
      break;
     case 'ADD_SPOT':
       return Object.assign({}, state, {
       		wanderspotsArr: state.wanderspotsArr.concat([action.spot])
       })

    default: return state;
  }
}

export default itineraryReducer;
