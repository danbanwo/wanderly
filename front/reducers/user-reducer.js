const _defaultState = [{userData: false}]

const logInReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "LOGIN_USER" :
			// getting the 

			return [action.data]

		default:
			return state;
	}
}


export default userReducer;
