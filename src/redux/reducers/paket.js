import {
	GET_PAKET_LIST,
	POST_PAKET_CREATE,
	GET_PAKET_DETAIL,
	PUT_PAKET_EDIT,
} from "../actions/PaketAction";

let initialState = {
	title: "Paketin",
	getPaketList: false,
	errorPaketList: false,
	getPaketDetail: false,
	errorPaketDetail: false,
	getResponseDataPaket: false,
	errorResponseDataPaket: false,
};

const paket = (state = initialState, action) => {
	switch (action.type) {
		case GET_PAKET_LIST:
			return {
				...state,
				getPaketList: action.payload.data,
				errorPaketList: action.payload.errorMessage,
			};

		case GET_PAKET_DETAIL:
			return {
				...state,
				getPaketDetail: action.payload.data,
				errorPaketDetail: action.payload.errorMessage,
			};

		case POST_PAKET_CREATE:
			return {
				...state,
				getResponseDataPaket: action.payload.data,
				errorResponseDataPaket: action.payload.errorMessage,
			};

		case PUT_PAKET_EDIT:
			return {
				...state,
				getResponDataPaket: action.payload.data,
				errorResponDataPaket: action.payload.errorMessage,
			};

		default:
			return state;
	}
};

export default paket;
