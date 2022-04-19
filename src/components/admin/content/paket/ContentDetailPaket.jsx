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
import { getPaketDetail } from "../../../../redux/actions/PaketAction";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DetailPaket from "../../form/DetailPaket";

class ContentDetailPaket extends Component {
	componentDidMount() {
		this.props.dispatch(getPaketDetail(this.props.match.params.id));
	}

	render() {
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Detail Paket
							<hr></hr>
						</CardTitle>
						<Row>
							<Col>
								<Link to="/paket">
									<Button color="danger">
										<FontAwesomeIcon icon={faArrowLeft} />
										Back
									</Button>
								</Link>
							</Col>
						</Row>
						<DetailPaket />
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect()(ContentDetailPaket);
