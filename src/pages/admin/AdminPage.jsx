import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentHomeAdmin from "../../components/admin/content/ContentHomeAdmin";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Footer from "../../components/Footer";
import ContentDataUsers from "../../components/admin/content/user/ContentDataUsers";
import ContentCreateUser from "../../components/admin/content/user/ContentCreateUser";
import ContentDetailUser from "../../components/admin/content/user/ContentDetailUser";
import ContentEditUser from "../../components/admin/content/user/ContentEditUser";
import ContentDataPaket from "../../components/admin/content/paket/ContentDataPaket";

export default class AdminPage extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<NavbarAdmin />
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
							path="/detail-user/:id"
							exact
							element={<ContentDetailUser />}
						></Route>
						<Route
							path="/edit-user/:id"
							exact
							element={<ContentEditUser />}
						></Route>
						<Route
							path="/paket"
							exact
							element={<ContentDataPaket />}
						></Route>
					</Routes>
					<Footer></Footer>
				</BrowserRouter>
			</div>
		);
	}
}
