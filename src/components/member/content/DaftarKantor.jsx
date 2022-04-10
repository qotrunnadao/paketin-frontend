import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../assets/css/DaftarKantor.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function DaftarKantor() {
	return (
		<section id="office" className="office my-5">
			<Container data-aos="fade-up">
				<header className="section-header mb-5 text-center">
					<h2>Our Office</h2>
				</header>
				<Row>
					<Col className="col-lg-6 mt-5 mt-lg-0 d-flex">
						<Row className="row align-self-center gy-4">
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={200}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Tangerang Selatan</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={300}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Jakarta</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={400}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Tegal</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={500}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Semarang</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={600}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Purwokerto</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={700}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Cilacap</h3>
								</div>
							</Col>
						</Row>
					</Col>
					<Col className="col-lg-6 mt-5 mt-lg-0 d-flex">
						<Row className="row align-self-center gy-4">
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={200}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Tangerang Selatan</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={300}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Jakarta</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={400}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Tegal</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={500}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Semarang</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={600}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Purwokerto</h3>
								</div>
							</Col>
							<Col
								className="col-md-6"
								data-aos="zoom-out"
								data-aos-delay={700}
							>
								<div className="office-box d-flex align-items-center">
									<FaMapMarkerAlt />
									<h3>Cilacap</h3>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>{" "}
			</Container>
		</section>
	);
}

export default DaftarKantor;
