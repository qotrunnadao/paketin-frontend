import axios from "axios";

export const GET_PAKET_LIST = "GET_PAKET_LIST";
export const POST_PAKET_CREATE = "POST_PAKET_CREATE";
export const GET_PAKET_DETAIL = "GET_PAKET_DETAIL";
export const PUT_PAKET_EDIT = "PUT_PAKET_EDIT";

const baseURL = "/v1";

export const getPaketList = () => {
	return (dispatch) => {
		axios
			.get(baseURL + "/api/pakets")
			.then(function (response) {
				// handle success
				dispatch({
					type: GET_PAKET_LIST,
					payload: {
						data: response.data.paketin.data,
						Message: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: GET_PAKET_LIST,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const getPaketDetail = (id) => {
	return (dispatch) => {
		axios
			.get(baseURL + "/api/pakets/" + id)
			.then(function (response) {
				dispatch({
					type: GET_PAKET_DETAIL,
					payload: {
						data: response.data.paketin.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				dispatch({
					type: GET_PAKET_DETAIL,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const PostPaketCreate = (data) => {
	return (dispatch) => {
		axios
			.post(baseURL + "/api/pakets", data)
			.then(function (response) {
				// handle success
				dispatch({
					type: POST_PAKET_CREATE,
					payload: {
						data: response.data.paketin.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				dispatch({
					type: POST_PAKET_CREATE,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const putPaketUpdate = (data, id) => {
	return (dispatch) => {
		axios
			.put(baseURL + "/api/pakets/" + id, data)
			.then(function (response) {
				console.log(response);

				dispatch({
					type: PUT_PAKET_EDIT,
					payload: {
						data: response.data.paketin.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				dispatch({
					type: PUT_PAKET_EDIT,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const deletePaket = (id) => {
	return (dispatch) => {
		axios
			.delete(baseURL + "/api/pakets/" + id)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const deleteDataPaket = () => {
	return (dispatch) => {
		dispatch({
			type: GET_PAKET_DETAIL,
			payload: {
				data: false,
				errorMessage: false,
			},
		});

		dispatch({
			type: POST_PAKET_CREATE,
			payload: {
				data: false,
				errorMessage: false,
			},
		});
	};
};
