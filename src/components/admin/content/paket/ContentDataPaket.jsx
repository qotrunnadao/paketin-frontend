import React, { Component } from "react";
import { Container, Card, CardTitle, CardBody } from "reactstrap";
import PaketTable from "../../table/PaketTable";
import { connect } from "react-redux";
import {
	getPaketList,
	deleteDataPaket,
} from "../../../../redux/actions/PaketAction";

class ContentDataPaket extends Component {
	componentDidMount() {
		this.props.dispatch(getPaketList());
		this.props.dispatch(deleteDataPaket());
	}

	render() {
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Data Paket
							<hr></hr>
						</CardTitle>
						<PaketTable />
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect()(ContentDataPaket);
