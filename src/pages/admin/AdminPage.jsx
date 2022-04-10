import React from "react";
import DashboardAdmin from "../../components/admin/content/DashboardAdmin";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Footer from "../../components/member/Footer";

function AdminPage() {
	return (
		<div>
			<NavbarAdmin></NavbarAdmin>
			<DashboardAdmin></DashboardAdmin>
			<Footer></Footer>
		</div>
	);
}

export default AdminPage;
