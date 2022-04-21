import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/FooterMember.css";

function Footer() {
	return (
		<footer id="footer" className="footer">
			<Container>
				<div className="copyright">
					© Copyright{" "}
					<strong>
						<span>Paketin</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className="credits">By Qotrunnada & Bugaresa</div>
			</Container>
		</footer>
	);
}

export default Footer;
