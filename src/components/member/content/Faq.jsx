import React from "react";
import { Button, Row, Card, Col, ListGroup, Container } from "react-bootstrap";
import "../../../assets/css/FaqMember.css";

function Faq() {
	return (
		<section id="faq" className="faq my-5">
			<Container data-aos="fade-up">
				<header className="section-header mb-5 text-center">
					<h2>F.A.Q</h2>
				</header>
				<Row xs={1} md={2} className="g-4">
					<Col>
						<Card className="card-faq">
							<Card.Header className="faq-header">
								Petunjuk Pengiriman Barang
							</Card.Header>
							<ListGroup variant="flush">
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>
									Dapibus ac facilisis in
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
					<Col>
						<Card className="card-faq">
							<Card.Header className="faq-header">
								Petunjuk Pengecekan Resi Paket
							</Card.Header>
							<ListGroup variant="flush">
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>
									Dapibus ac facilisis in
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Faq;
