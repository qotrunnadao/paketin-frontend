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
import { connect } from "react-redux";
import { getUserDetail } from "../../../../redux/actions/UserAction";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DetailUser from "../../form/DetailUser";

class ContentDetailUser extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}

	render() {
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Detail User Paketin
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
						<DetailUser />
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect()(ContentDetailUser);
