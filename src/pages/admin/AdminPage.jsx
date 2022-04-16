import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentHomeAdmin from "../../components/admin/content/ContentHomeAdmin";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Footer from "../../components/Footer";
import ContentDataUsers from "../../components/admin/content/ContentDataUsers";
import ContentCreateUser from "../../components/admin/content/ContentCreateUser";
import EditUser from "../../components/admin/form/EditUser";
import ContentDataPengiriman from "../../components/admin/content/ContentDataPengiriman";

export default class AdminPage extends Component {
	render() {
		return (
			<div>
				<NavbarAdmin></NavbarAdmin>
				<Router>
					<Routes>
						<Route path="/" element={<ContentHomeAdmin />}></Route>
						<Route
							path="/users"
							element={<ContentDataUsers />}
						></Route>
						<Route
							path="/create-user"
							element={<ContentCreateUser />}
						></Route>
						<Route
							path="/edit-user/:id"
							element={<EditUser />}
						></Route>
						<Route
							path="/pengiriman"
							element={<ContentDataPengiriman />}
						></Route>
					</Routes>
				</Router>
				<Footer></Footer>
			</div>
		);
	}
}
