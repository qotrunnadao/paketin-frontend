import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarAdmin() {
	return (
		<div>
			<Navbar
				expand="lg"
				variant="light"
				id="header"
				className="header"
				sticky="top"
			>
				<Container>
					<Navbar.Brand className="brand">
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
							<Link to="/" className="link">
								Home
							</Link>
							<Link to="/paket" className="link">
								Data Paket
							</Link>
							<Link to="/users" className="link">
								Data User
							</Link>
						</Nav>
						<Button
							variant="outline-secondary"
							className="login-button"
						>
							Logout
							<i class="fa-regular fa-right-to-bracket"></i>
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavbarAdmin;
