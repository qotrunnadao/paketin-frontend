import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "../../assets/css/NavbarMember.css";

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
						{/* <img
							alt=""
							src="{logo}"
							width="50"
							height="50"
							className="d-inline-block align-top"
						/>{" "} */}
						Paketin
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home" className="link">
								Home
							</Nav.Link>
							<Nav.Link href="#link" className="link">
								About
							</Nav.Link>
							<NavDropdown
								title="Cek Resi"
								id="basic-nav-dropdown"
								className="link"
							>
								<NavDropdown.Item href="#action/3.1">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Cek Ongkir"
								id="basic-nav-dropdown"
								className="link"
							>
								<NavDropdown.Item href="#action/3.1">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Button
							variant="outline-secondary"
							className="login-button"
						>
							Login
							<i class="fa-regular fa-right-to-bracket"></i>
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarMember;
