import React from "react";
import AboutUs from "../../components/member/content/AboutUs";
import ContactUs from "../../components/member/content/ContactUs";
import DaftarKantor from "../../components/member/content/DaftarKantor";
import Faq from "../../components/member/content/Faq";
import Hero from "../../components/member/content/Hero";
import Footer from "../../components/member/Footer";
import NavbarComponent from "../../components/member/NavbarMember";

function MemberPage() {
	return (
		<div className="App">
			<NavbarComponent></NavbarComponent>
			<Hero></Hero>
			<main id="main">
				<AboutUs></AboutUs>
				<DaftarKantor></DaftarKantor>
				<Faq></Faq>
				<ContactUs></ContactUs>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default MemberPage;
