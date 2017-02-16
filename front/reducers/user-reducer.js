const _defaultState = {};

const userReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "USER_LOGIN" :
			return Object.assign({}, state, action.data)
			break;
		case "USER_SIGNUP":
			return action.data
			break;
		default:
			return state;
	}
}


export default userReducer;
