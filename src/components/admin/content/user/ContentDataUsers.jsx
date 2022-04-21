import React, { Component } from "react";
import { Container, Card, CardTitle, CardBody } from "reactstrap";
import UsersTable from "../../table/UsersTable";
import { connect } from "react-redux";
import {
	getUsersList,
	deleteDataUser,
} from "../../../../redux/actions/UserAction";

class ContentDataUsers extends Component {
	componentDidMount() {
		this.props.dispatch(getUsersList());
		this.props.dispatch(deleteDataUser());
	}

	render() {
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Data User
							<hr></hr>
						</CardTitle>
						<UsersTable />
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect()(ContentDataUsers);
