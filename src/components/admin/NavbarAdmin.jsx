import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavbarAdmin() {
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
							src="{logo}"
							width="50"
							height="50"
							className="d-inline-block align-top"
						/>{" "}
						Paketin
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home" className="link">
								Home
							</Nav.Link>
							<Nav.Link href="#home" className="link">
								Pengiriman
							</Nav.Link>
							<Nav.Link href="#home" className="link">
								Users
							</Nav.Link>
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
