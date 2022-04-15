import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/FooterMember.css";

function Footer() {
	return (
		<footer id="footer" className="footer">
			{/* <div className="footer-top">
				<Container>
					<Row className="gy-4">
						<Col className="col-lg-5 col-md-12 footer-info">
							<a
								href="index.html"
								className="d-flex align-items-center"
							>
								<img src="assets/images/logo2.png" alt="logo" />
							</a>
						</Col>
						<Col className="col-lg-2 col-6 footer-links">
							<h4>Useful Links</h4>
							<ul>
								<li>
									<a href="#home">Home</a>
								</li>
								<li>
									<a href="#about">About us</a>
								</li>
								<li>
									<a href="#office">Our Office</a>
								</li>
								<li>
									<a href="#faq">Faq</a>
								</li>
								<li>
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
			</div> */}
			<Container>
				<div className="copyright">
					© Copyright{" "}
					<strong>
						<span>Paketin.com</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className="credits">Designed by Qotrunnada & Bugaresa</div>
			</Container>
		</footer>
	);
}

export default Footer;
