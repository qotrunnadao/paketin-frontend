import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../../../validations/UserValidations";

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

class formCreateUser extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<FormGroup row>
					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="nama_kantor"
								component={renderField}
								label="Nama Kantor :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="nama_admin"
								component={renderField}
								label="Nama Admin :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="alamat_kantor"
								component={renderField}
								label="Alamat Kantor :"
							/>
						</FormGroup>
					</Col>

					<Col md={6}>
						<FormGroup>
							<Field
								type="text"
								name="nomor_kantor"
								component={renderField}
								label="Nomor Kantor :"
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

formCreateUser = reduxForm({
	form: "formCreateUser",
	enableReinitialize: true,
	validate: UserValidation,
})(formCreateUser);
export default connect()(formCreateUser);
