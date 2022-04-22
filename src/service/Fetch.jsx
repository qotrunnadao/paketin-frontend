import axios from "axios";

const BASE_URL = "/api/";

export async function getData(target, token) {
	let head = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const url = BASE_URL + target;
	return await axios.get(url, head);
}

export function postData(target, data, token) {
	let head = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const url = BASE_URL + target;
	return axios.post(url, data, head);
}

export function postNoRestrict(target, data) {
	const url = BASE_URL + target;
	return axios.post(url, data);
}
