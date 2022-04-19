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
import { PostPaketCreate } from "../../../../redux/actions/PaketAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
	return {
		getResponseDataPaket: state.users.getResponseDataPaket,
		errorResponseDataPaket: state.users.errorResponseDataPaket,
	};
};
class ContentCreatePaket extends Component {
	handleSubmit(data) {
		this.props.dispatch(PostPaketCreate(data));
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
					"Paket Created!",
					"produk : " +
						this.props.getResponseDataUser.produk +
						" , berat_produk : " +
						this.props.getResponseDataUser.berat_produk,
					"success"
				);
			}
		}
		return (
			<Container className="my-5">
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Create Paket
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

export default connect(mapStateToProps, null)(ContentCreatePaket);
