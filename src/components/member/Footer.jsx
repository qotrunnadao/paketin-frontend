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
								className="logo d-flex align-items-center"
							>
								<img src="assets/img/logo.png" alt />
								<span>Paketin.com</span>
							</a>
							<p>
								Cras fermentum odio eu feugiat lide par naso
								tierra. Justo eget nada terra videa magna derita
								valies darta donna mare fermentum iaculis eu non
								diam phasellus.
							</p>
							<div className="social-links mt-3">
								<a href="#" className="twitter">
									<i className="bi bi-twitter" />
								</a>
								<a href="#" className="facebook">
									<i className="bi bi-facebook" />
								</a>
								<a href="#" className="instagram">
									<i className="bi bi-instagram" />
								</a>
								<a href="#" className="linkedin">
									<i className="bi bi-linkedin" />
								</a>
							</div>
						</Col>
						<Col className="col-lg-2 col-6 footer-links">
							<h4>Useful Links</h4>
							<ul>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Home</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">About us</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Services</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Terms of service</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Privacy policy</a>
								</li>
							</ul>
						</Col>
						<Col className="col-lg-2 col-6 footer-links">
							<h4>Our Services</h4>
							<ul>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Web Design</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Web Development</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Product Management</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Marketing</a>
								</li>
								<li>
									<i className="bi bi-chevron-right" />{" "}
									<a href="#">Graphic Design</a>
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
