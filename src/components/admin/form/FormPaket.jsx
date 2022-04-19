import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import PaketValidations from "../../../validations/PaketValidations";

const renderField = ({
	input,
	type,
	placeholder,
	label,
	disabled,
	readOnly,
	meta: { touched, error, warning },
}) => (
	<Row>
		<Col md="12">
			<Label htmlFor="{input}" className="col-form-label">
				{label}
			</Label>
		</Col>
		<Col md="12">
			<Input
				{...input}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				readOnly={readOnly}
			></Input>
			{touched &&
				((error && <p style={{ color: "red" }}>{error}</p>) ||
					(warning && <p style={{ color: "brown" }}>{warning}</p>))}
		</Col>
	</Row>
);

const mapStateToProps = (state) => {
	return {
		initialValues: {
			id: state.paket.getPaketDetail.id,
			produk: state.paket.getPaketDetail.produk,
			berat_paket: state.paket.getPaketDetail.berat_paket,
			nama_pengirim: state.paket.getPaketDetail.nama_pengirim,
			nama_penerima: state.paket.getPaketDetail.nama_penerima,
			nomor_penerima: state.paket.getPaketDetail.nomor_penerima,
			alamat_tujuan: state.paket.getPaketDetail.alamat_tujuan,
		},
	};
};

class formPaket extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<Field type="hidden" name="id" component={renderField} />
				<FormGroup row>
					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="produk"
								component={renderField}
								label="Nama Produk :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="number"
								name="berat_paket"
								component={renderField}
								label="Berat Paket :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="nama_pengirim"
								component={renderField}
								label="Nama Pengirim :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="nama_penerima"
								component={renderField}
								label="Nama Penerima :"
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="nomor_penerima"
								component={renderField}
								label="Nomor Penerima :"
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="alamat_tujuan"
								component={renderField}
								label="Alamat Tujuan :"
							/>
						</FormGroup>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Col md="12">
						<FormGroup>
							<Button
								color="primary"
								type="submit"
								className="float-right"
								disabled={this.props.submitting}
							>
								Submit
							</Button>
						</FormGroup>
					</Col>
				</FormGroup>
			</form>
		);
	}
}

formPaket = reduxForm({
	form: "formUser",
	validate: PaketValidations,
	enableReinitialize: true,
})(formPaket);
export default connect(mapStateToProps, null)(formPaket);
