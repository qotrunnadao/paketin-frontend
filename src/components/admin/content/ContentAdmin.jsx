import React from "react";
import { Route, Routes, matchRoutes } from "react-router";

import ContentHomeAdmin from "./ContentHomeAdmin";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";
import { authAction } from "../../../redux/reducers/AuthReducer";

import ContentDataUsers from "./user/ContentDataUsers";
import ContentCreateUser from "./user/ContentCreateUser";
import ContentEditUser from "./user/ContentEditUser";
import ContentDetailUser from "./user/ContentDetailUser";
import ContentDataPaket from "./paket/ContentDataPaket";
import ContentCreatePaket from "./paket/ContentCreatePaket";
import ContentEditPaket from "./paket/ContentEditPaket";
import ContentDetailPaket from "./paket/ContentDetailPaket";

const ContentAdmin = () => {
	let { path } = matchRoutes();

	// const token = useSelector((state) => state.auth.token);

	// const dispatch = useDispatch();

	// if (token) {
	// 	const decoded = jwtDecode(token);
	// 	if (decoded.exp < Date.now() / 1000) {
	// 		swal("Error!", "Your session expired", "error");
	// 		dispatch(authAction.logout());
	// 	}
	// }

	return (
		<Routes>
			<Route exact path={`${path}`} component={ContentHomeAdmin} />
			<Route exact path={`${path}/users`} component={ContentDataUsers} />
			<Route
				exact
				path={`${path}/create-user`}
				component={ContentCreateUser}
			/>
			<Route
				exact
				path={`${path}/edit-user/:id`}
				component={ContentEditUser}
			/>
			<Route
				exact
				path={`${path}/detail-user/:id`}
				component={ContentDetailUser}
			/>
			<Route exact path={`${path}/paket`} component={ContentDataPaket} />
			<Route
				exact
				path={`${path}/create-paket`}
				component={ContentCreatePaket}
			/>
			<Route
				exact
				path={`${path}/edit-paket/:id`}
				component={ContentEditPaket}
			/>
			<Route
				exact
				path={`${path}/detail-paket/:id`}
				component={ContentDetailPaket}
			/>
		</Routes>
	);
};

export default ContentAdmin;
