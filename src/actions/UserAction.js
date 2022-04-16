import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const POST_USER_CREATE = "POST_USER_CREATE";

export const getUsersList = () => {
	return (dispatch) => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(function (response) {
				// handle success
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const PostUserCreate = (data) => {
	return (dispatch) => {
		axios
			.post("https://sandbox-paketin.herokuapp.com/v1", data)
			.then(function (response) {
				// console.log(response);
				// handle success
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const deleteDataUser = () => {
	return (dispatch) => {
		dispatch({
			type: POST_USER_CREATE,
			payload: {
				data: false,
				errorMessage: false,
			},
		});
	};
};
