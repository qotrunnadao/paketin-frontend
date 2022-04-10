import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "../../assets/css/NavbarMember.css";
import "../../assets/css/General.css";

const NavbarMember = () => {
	return (
		<div>
			<Navbar
				expand="lg"
				variant="light"
				id="header"
				className="header"
				fixed="top"
			>
				<Container>
					<Navbar.Brand href="#home" className="brand">
						<img
							alt=""
							src="assets/images/logo2.png"
							width="120"
							height="50"
							className="d-inline-block align-top"
						/>{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home" className="link">
								Home
							</Nav.Link>
							<Nav.Link href="#about" className="link">
								About
							</Nav.Link>
							<Nav.Link href="#office" className="link">
								Office
							</Nav.Link>
							<Nav.Link href="#faq" className="link">
								FAQ
							</Nav.Link>
							<Nav.Link href="#contact" className="link">
								Contact
							</Nav.Link>
						</Nav>
						<Button
							variant="outline-secondary"
							className="login-button"
						>
							Login
							<span className="icons-login">
								<FiLogIn />
							</span>
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarMember;
