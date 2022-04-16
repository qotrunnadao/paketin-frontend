import React, { Component } from "react";
import UsersTable from "../table/UsersTable";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../../../actions/UserAction";

class ContentDataUsers extends Component {
	componentDidMount() {
		this.props.dispatch(getUsersList());
		this.props.dispatch(deleteDataUser());
	}
	render() {
		return (
			<div>
				<UsersTable />
			</div>
		);
	}
}

export default connect()(ContentDataUsers);
