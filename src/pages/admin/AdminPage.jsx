import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentHomeAdmin from "../../components/admin/content/ContentHomeAdmin";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Footer from "../../components/Footer";
import ContentDataUsers from "../../components/admin/content/ContentDataUsers";
import ContentCreateUser from "../../components/admin/content/ContentCreateUser";
import ContentEditUser from "../../components/admin/content/ContentEditUser";
import ContentDataPengiriman from "../../components/admin/content/ContentDataPengiriman";

export default class AdminPage extends Component {
	render() {
		return (
			<div>
				<Router>
					<NavbarAdmin></NavbarAdmin>
					<Routes>
						<Route
							path="/"
							exact
							element={<ContentHomeAdmin />}
						></Route>
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
							element={<ContentEditUser />}
						></Route>
						<Route
							path="/pengiriman"
							element={<ContentDataPengiriman />}
						></Route>
					</Routes>
					<Footer></Footer>
				</Router>
			</div>
		);
	}
}
