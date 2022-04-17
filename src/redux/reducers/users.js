import { GET_USERS_LIST, POST_USER_CREATE } from "../actions/UserAction";

let initialState = {
	title: "Paketin",
	getUsersList: false,
	errorUsersList: false,
	getResponseDataUser: false,
	errorResponseDataUser: false,
};

const users = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_LIST:
			return {
				...state,
				getUsersList: action.payload.data,
				errorUsersList: action.payload.errorMessage,
			};

		case POST_USER_CREATE:
			return {
				...state,
				getResponseDataUser: action.payload.data,
				errorResponseDataUser: action.payload.errorMessage,
			};

		default:
			return state;
	}
};

export default users;
