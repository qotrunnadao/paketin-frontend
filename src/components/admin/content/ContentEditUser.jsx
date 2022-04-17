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
import FormUser from "../form/FormUser";
import { connect } from "react-redux";
import {
	getUserDetail,
	putUserUpdate,
} from "../../../redux/actions/UserAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
	return {
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser,
	};
};

class ContentEditUser extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}

	handleSubmit(data) {
		this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
	}
	render() {
		if (this.props.getResponDataUser || this.props.errorResponDataUser) {
			if (this.props.errorResponDataUser) {
				swal("Failed!", this.props.errorResponDataUser, "error");
			} else {
				swal(
					"User Updated!",
					"Nama Kantor : " +
						this.props.getResponDataUser.nama_kantor +
						" , Nama Admin : " +
						this.props.getResponDataUser.nama_admin,
					"success"
				);
			}
		}
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
						<FormUser
							onSubmit={(data) => this.handleSubmit(data)}
						/>
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(ContentEditUser);
