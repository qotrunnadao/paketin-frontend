import React from "react";
import {
	InputGroup,
	DropdownButton,
	Dropdown,
	FormControl,
	Container,
	Row,
	Col,
} from "react-bootstrap";
import "../../../assets/css/HeroMember.css";

export const Hero = (props) => {
	return (
		<section id="home" className="hero d-flex align-items-center">
			<Container>
				<Row>
					<Col className="col-lg-6 d-flex flex-column justify-content-center">
						<h1 data-aos="fade-up">{props.title}</h1>
						<h1 data-aos="fade-up" data-aos-delay={400}>
							Jasa Pengiriman Barang & Cek Resi
						</h1>
						<h2 data-aos="fade-up" data-aos-delay={600}>
							{" "}
							Dijamin Aman Sampai Tujuan!
						</h2>
						<div data-aos="fade-up" data-aos-delay={800}>
							<div className="text-center text-lg-start">
								<InputGroup className="mt-3 search">
									<FormControl aria-label="Text input" />
									<DropdownButton
										title="Cek Resi"
										align="center"
										className="btn-cek"
									>
										<Dropdown.Item href="#">
											Action
										</Dropdown.Item>
										<Dropdown.Item href="#">
											Another action
										</Dropdown.Item>
										<Dropdown.Item href="#">
											Something else here
										</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item href="#">
											Separated link
										</Dropdown.Item>
									</DropdownButton>
								</InputGroup>
							</div>
						</div>
					</Col>
					<div
						className="col-lg-6 hero-img"
						data-aos="zoom-out"
						data-aos-delay={200}
					>
						<img
							className="d-block w-100 img-banner"
							src="assets/images/hero-img.svg"
							alt="hero"
						/>
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
