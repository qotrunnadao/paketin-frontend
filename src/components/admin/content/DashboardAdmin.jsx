import React from "react";
import "../../../assets/css/DasboardAdmin.css";
import { Container, Card, Row, Col, CardTitle, CardText } from "reactstrap";

function DashboardAdmin() {
	return (
		<div>
			<Container className="mt-5">
				<Card body color="primary" inverse className="welcome">
					<CardTitle tag="h1" className="text-center">
						Selamat Datang, Admin!!
					</CardTitle>
				</Card>
			</Container>

			<Container className="mt-5">
				<Row>
					<Col sm="6" lg="4" className="mb-3">
						<Card body color="info" inverse>
							<CardTitle tag="h5">
								Jumlah Pengiriman Paket Bulan Ini
							</CardTitle>
							<CardText tag="h1">30</CardText>
						</Card>
					</Col>
					<Col sm="6" lg="4" className="mb-3">
						<Card
							body
							color="secondary"
							inverse
							card="card-box bg-orange"
						>
							<CardTitle tag="h5">
								Jumlah Pengiriman Paket Hari ini
							</CardTitle>
							<CardText tag="h1">5</CardText>
						</Card>
					</Col>
					<Col sm="6" lg="4" className="mb-3">
						<Card body color="dark" inverse>
							<CardTitle tag="h5">
								Jumlah Pengiriman Paket Hari ini
							</CardTitle>
							<CardText tag="h1">5</CardText>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default DashboardAdmin;
