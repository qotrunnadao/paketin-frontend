import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentHomeAdmin from "../../components/admin/content/ContentHomeAdmin";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Footer from "../../components/Footer";
import ContentDataUsers from "../../components/admin/content/ContentDataUsers";
import ContentCreateUser from "../../components/admin/content/ContentCreateUser";
import ContentDetailUser from "../../components/admin/content/ContentDetailUser";
import ContentEditUser from "../../components/admin/content/ContentEditUser";
import ContentDataPengiriman from "../../components/admin/content/ContentDataPengiriman";

export default class AdminPage extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<NavbarAdmin></NavbarAdmin>
					<Routes>
						<Route
							path="/"
							exact
							element={<ContentHomeAdmin />}
						></Route>
						<Route
							path="/users"
							exact
							element={<ContentDataUsers />}
						></Route>
						<Route
							path="/create-user"
							exact
							element={<ContentCreateUser />}
						></Route>
						<Route
							path="/detail-user"
							exact
							element={<ContentDetailUser />}
						></Route>
						<Route
							path="/edit-user"
							exact
							element={<ContentEditUser />}
						></Route>
						<Route
							path="/pengiriman"
							exact
							element={<ContentDataPengiriman />}
						></Route>
					</Routes>
					<Footer></Footer>
				</BrowserRouter>
			</div>
		);
	}
}
