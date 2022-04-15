import DashboardAdmin from "../../components/admin/content/DashboardAdmin";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Footer from "../../components/member/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import TableComponent from "../../components/admin/content/UsersTable";

export default class AdminPage extends Component {
	state = {
		users: [
			{
				id: 1,
				nama_kantor: "Gudang Transit Purwokerto",
				nama_admin: "Coki",
				nomor_kantor: "0821-2121-2121",
				alamat_kantor: "Jl. Karangreja Tengah No.12, Purwokerto",
				password: "GudangTransitPWT",
			},
			{
				id: 2,
				nama_kantor: "Gudang Transit Pekalongan",
				nama_admin: "Bugaresa",
				nomor_kantor: "0821-2121-2121",
				alamat_kantor: "Jl. Karangreja Tengah No.12, Pekalongan",
				password: "GudangTransitPKL",
			},
			{
				id: 3,
				nama_kantor: "Gudang Transit Pemalang",
				nama_admin: "Aripin",
				nomor_kantor: "0821-2121-2121",
				alamat_kantor: "Jl. Karangreja Tengah No.12, Pemalang",
				password: "GudangTransitPML",
			},
		],
	};
	render() {
		return (
			<div>
				<NavbarAdmin></NavbarAdmin>
				<DashboardAdmin></DashboardAdmin>
				<TableComponent users={this.state.users}></TableComponent>
				<Footer></Footer>
			</div>
		);
	}
}
