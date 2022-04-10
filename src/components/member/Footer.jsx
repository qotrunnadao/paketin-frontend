import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/FooterMember.css";

function Footer() {
	return (
		<footer id="footer" className="footer">
			<div className="footer-top">
				<Container>
					<Row className="gy-4">
						<Col className="col-lg-5 col-md-12 footer-info">
							<a
								href="index.html"
								className="d-flex align-items-center"
							>
								<img
									src="assets/images/logo2.png"
									alt="logo"
									width="400"
									height="150"
								/>
							</a>
						</Col>
						<Col className="col-lg-2 col-6 footer-links">
							<h4>Useful Links</h4>
							<ul>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#home">Home</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#about">About us</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#office">Our Office</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#faq">Faq</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</Col>
						<Col className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
							<h4>Contact Us</h4>
							<p>
								A108 Adam Street <br />
								New York, NY 535022
								<br />
								United States <br />
								<br />
								<strong>Phone:</strong> +1 5589 55488 55
								<br />
								<strong>Email:</strong> info@example.com
								<br />
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<Container>
				<div className="copyright">
					© Copyright{" "}
					<strong>
						<span>Paketin.com</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className="credits">
					Designed by{" "}
					<a href="https://bootstrapmade.com/">
						Qotrunnada & Bugaresa
					</a>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
