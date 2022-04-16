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
import FormCreateUser from "../form/FormCreateUser";
import { connect } from "react-redux";
import { PostUserCreate } from "../../../actions/UserAction";

class ContentCreateUser extends Component {
	handleSubmit(data) {
		this.props.dispatch(PostUserCreate(data));
	}
	render() {
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Create User Paketin
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
						<FormCreateUser
							onSubmit={(data) => this.handleSubmit(data)}
						/>
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect()(ContentCreateUser);
