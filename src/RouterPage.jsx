import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import MemberPage from "./pages/member/MemberPage";
import DashboardAdmin from "./components/admin/content/DashboardAdmin";

export default class RouterPage extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<Redirect to="/member" />
				</Route>
				<MemberRoute path="/member" component={MemberPage} />
				<AdminRoute path="/admin" component={DashboardAdmin} />
			</Switch>
		);
	}
}
