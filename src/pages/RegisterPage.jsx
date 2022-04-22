import React, { useState } from "react";
import "../assets/css/LoginPage.css";
import { Input, Button, Form, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { postNoRestrict } from "../service/Fetch";
import { useNavigate } from "react-router";

const RegisterPage = () => {
	// let navigate = useNavigate();

	// const [data, setData] = useState({
	// 	nama_kantor: "",
	// 	nama_admin: "",
	// 	nomor_kantor: "",
	// 	alamat_kantor: "",
	// 	password: "",
	// });

	// const registerHandler = (e) => {
	// 	e.preventDefault();

	// 	postNoRestrict("member/register", data)
	// 		.then((res) => {
	// 			swal({
	// 				title: "Success!",
	// 				text: "Registration successfully, please login",
	// 				icon: "success",
	// 			});
	// 			navigate.push("/login");
	// 		})
	// 		.catch((err) => {
	// 			swal("Error", err.response.data.password, "error");
	// 		});
	// };

	return (
		<div className="limiter">
			<div className="container-login">
				<div className="wrap-register">
					<Form
						className="login-form validate-form"
						// onSubmit={registerHandler}
					>
						<div className="login-logo">
							<img src="assets/images/logo2.png" alt="" />
						</div>
						<span className="login-form-title">
							Register to create your account
						</span>
						<Row>
							<Col>
								<div
									className="wrap-Input validate-input"
									data-validate="Valid email is required: ex@abc.xyz"
								>
									<Input
										className="Input"
										type="text"
										name="nama_kantor"
										placeholder="Nama Kantor"
										// onChange={(e) =>
										// 	setData({
										// 		...data,
										// 		nama_kantor: e.target.value,
										// 	})
										// }
										required
									/>
									<span className="focus-Input-1" />
									<span className="focus-Input-2" />
								</div>
								<div
									className="wrap-Input validate-input"
									data-validate="Valid email is required: ex@abc.xyz"
								>
									<Input
										className="Input"
										type="text"
										name="nama_admin"
										placeholder="Nama Admin"
										// onChange={(e) =>
										// 	setData({
										// 		...data,
										// 		nama_admin: e.target.value,
										// 	})
										// }
										required
									/>
									<span className="focus-Input-1" />
									<span className="focus-Input-2" />
								</div>
								<div
									className="wrap-Input rs1 validate-Input"
									data-validate="Password is required"
								>
									<Input
										className="Input"
										type="text"
										name="nomor_kantor"
										placeholder="Nomor Kantor"
										// onChange={(e) =>
										// 	setData({
										// 		...data,
										// 		nomor_kantor: e.target.value,
										// 	})
										// }
										required
									/>
									<span className="focus-Input-1" />
									<span className="focus-Input-2" />
								</div>
							</Col>
							<Col>
								<div
									className="wrap-Input validate-input"
									data-validate="Valid email is required: ex@abc.xyz"
								>
									<Input
										className="Input"
										type="text"
										name="alamat_kantor"
										placeholder="Alamat Kantor"
										// onChange={(e) =>
										// 	setData({
										// 		...data,
										// 		alamat_kantor: e.target.value,
										// 	})
										// }
										required
									/>
									<span className="focus-Input-1" />
									<span className="focus-Input-2" />
								</div>
								<div
									className="wrap-Input validate-input"
									data-validate="Valid email is required: ex@abc.xyz"
								>
									<Input
										className="Input"
										type="password"
										name="password"
										placeholder="Password"
										// onChange={(e) =>
										// 	setData({
										// 		...data,
										// 		password: e.target.value,
										// 	})
										// }
										required
									/>
									<span className="focus-Input-1" />
									<span className="focus-Input-2" />
								</div>
								<div className="container-register-form-btn">
									<Button className="login-form-btn">
										Register
									</Button>
								</div>
							</Col>
						</Row>
						<div className="text-center">
							<span className="txt1">
								Already have an account?
							</span>
							<Link to="/login">Login</Link>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
