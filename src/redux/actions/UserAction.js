import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

const baseURL = "https://sandbox-paketin.herokuapp.com/v1";

export const getUsersList = () => {
	return (dispatch) => {
		axios
			.get(baseURL + "/api/users")
			.then(function (response) {
				// handle success
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: response.paketin.data,
						Message: false,
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

export const getUserDetail = (id) => {
	return (dispatch) => {
		axios
			.get(baseURL + "/api/users/" + id)
			.then(function (response) {
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				dispatch({
					type: GET_USER_DETAIL,
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
			.post(baseURL + "/api/users", data)
			.then(function (response) {
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
			type: GET_USER_DETAIL,
			payload: {
				data: false,
				errorMessage: false,
			},
		});

		dispatch({
			type: POST_USER_CREATE,
			payload: {
				data: false,
				errorMessage: false,
			},
		});
	};
};

export const putUserUpdate = (data, id) => {
	return (dispatch) => {
		axios
			.put(baseURL + "/api/users/" + id, data)
			.then(function (response) {
				console.log(response);

				dispatch({
					type: PUT_USER_EDIT,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				dispatch({
					type: PUT_USER_EDIT,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const deleteUser = (id) => {
	return (dispatch) => {
		axios
			.delete(baseURL + "api/users/" + id)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};
