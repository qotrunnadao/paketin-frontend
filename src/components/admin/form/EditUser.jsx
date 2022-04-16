import React, { Component } from "react";
import {
	Container,
	Card,
	CardBody,
	CardTitle,
	Row,
	Col,
	Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class EditUser extends Component {
	render() {
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Edit User Paketin
						</CardTitle>
						<Row>
							<Col>
								<Link to="/users">
									<Button color="danger">
										<FontAwesomeIcon icon={faArrowLeft} />
										Back
									</Button>
								</Link>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Container>
		);
	}
}
