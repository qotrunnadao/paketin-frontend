import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { useSelector } from "react-redux";
import AdminPage from "./admin/AdminPage";
import MemberPage from "./member/MemberPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ContentDataUsers from "../components/admin/content/user/ContentDataUsers";
import ContentCreateUser from "../components/admin/content/user/ContentCreateUser";
import ContentEditUser from "../components/admin/content/user/ContentEditUser";
import ContentDetailUser from "../components/admin/content/user/ContentDetailUser";
import ContentDataPaket from "../components/admin/content/paket/ContentDataPaket";
import ContentCreatePaket from "../components/admin/content/paket/ContentCreatePaket";
import ContentEditPaket from "../components/admin/content/paket/ContentEditPaket";
import ContentDetailPaket from "../components/admin/content/paket/ContentDetailPaket";

const RouterPage = () => {
	// const token = useSelector((state) => state.auth.token);
	// const role = useSelector((state) => state.auth.role);

	// const AdminRoute = ({ ...props }) => {
	// 	return token !== "" && role === "ROLE_ADMIN" ? (
	// 		<Route {...props} />
	// 	) : (
	// 		<Navigate to="/login" />
	// 	);
	// };

	// const MemberRoute = ({ ...props }) => {
	// 	return token !== "" && role === "ROLE_MEMBER" ? (
	// 		<Route {...props} />
	// 	) : (
	// 		<Navigate to="/login" />
	// 	);
	// };

	// const CostumRoute = ({ ...props }) => {
	// 	return token ? (
	// 		<Navigate to={role === "ROLE_ADMIN" ? "/admin" : "/member"} />
	// 	) : (
	// 		<Route {...props} />
	// 	);
	// };

	return (
		<Routes>
			{/* <Route exact path="/">
				<Navigate to="/member" />
			</Route> */}
			<Route exact path="/" component={MemberPage} />
			<Route exact path="/login" component={LoginPage} />
			<Route exact path="/register" component={RegisterPage} />
			<Route exact path="/admin" component={AdminPage} />
			{/* <Route exact path="/user" component={ContentDataUsers} />
			<Route exact path="create-user" component={ContentCreateUser} />
			<Route exact path="edit-user/:id" component={ContentEditUser} />
			<Route exact path="detail-user/:id" component={ContentDetailUser} />
			<Route exact path="/paket" component={ContentDataPaket} />
			<Route exact path="/create-paket" component={ContentCreatePaket} />
			<Route exact path="edit-paket/:id" component={ContentEditPaket} />
			<Route
				exact
				path="detail-paket/:id"
				component={ContentDetailPaket}
			/> */}
		</Routes>
	);
};

export default RouterPage;
