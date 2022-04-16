import React, { Component } from "react";
import UsersTable from "../table/UsersTable";
import { connect } from "react-redux";
import { getUsersList } from "../../../actions/UserAction";

class ContentDataUsers extends Component {
	componentDidMount() {
		this.props.dispatch(getUsersList());
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
