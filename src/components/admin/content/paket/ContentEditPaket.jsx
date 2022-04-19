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
import FormPaket from "../../form/FormPaket";
import { connect } from "react-redux";
import {
	getPaketDetail,
	putPaketUpdate,
} from "../../../../redux/actions/PaketAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
	return {
		getResponseDataPaket: state.paket.getResponseDataPaket,
		errorResponseDataPaket: state.paket.errorResponseDataPaket,
	};
};

class ContentEditPaket extends Component {
	componentDidMount() {
		this.props.dispatch(getPaketDetail(this.props.match.params.id));
	}

	handleSubmit(data) {
		this.props.dispatch(putPaketUpdate(data, this.props.match.params.id));
	}
	render() {
		if (
			this.props.getResponseDataPaket ||
			this.props.errorResponseDataPaket
		) {
			if (this.props.errorResponseDataPaket) {
				swal("Failed!", this.props.errorResponseDataPaket, "error");
			} else {
				swal(
					"Paket Updated!",
					"Produk : " +
						this.props.getResponseDataPaket.produk +
						" , Berat Paket : " +
						this.props.getResponseDataPaket.berat_paket,
					"success"
				);
			}
		}
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Edit Paket
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
						<FormPaket
							onSubmit={(data) => this.handleSubmit(data)}
						/>
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(ContentEditPaket);
