import AboutUs from "../../components/member/content/AboutUs";
import ContactUs from "../../components/member/content/ContactUs";
import DaftarKantor from "../../components/member/content/DaftarKantor";
import Faq from "../../components/member/content/Faq";
import Hero from "../../components/member/content/Hero";
import Footer from "../../components/member/Footer";
import NavbarComponent from "../../components/member/NavbarMember";

import React, { Component } from "react";

export default class MemberPage extends Component {
	state = {
		title: "Paketin",
	};
	render() {
		return (
			<div className="App">
				<NavbarComponent></NavbarComponent>
				<Hero title={this.state.title}></Hero>
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
}
