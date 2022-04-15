import React, { Component } from "react";
import "../assets/css/LoginPage.css";
import { Input, Button, Form, Row, Col } from "reactstrap";

export default class RegisterPage extends Component {
	render() {
		return (
			<div className="limiter">
				<div className="container-login">
					<div className="wrap-register">
						<Form className="login-form validate-form">
							<img
								src="assets/images/logo2.png"
								alt=""
								className="text-center"
							/>
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
											name="FullName"
											placeholder="Full Name"
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
											name="email"
											placeholder="Email"
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
											type="password"
											name="pass"
											placeholder="Password"
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
											name="username"
											placeholder="Username"
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
											name="phone"
											placeholder="Phone Number"
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
											name="address"
											placeholder="Address"
										/>
										<span className="focus-Input-1" />
										<span className="focus-Input-2" />
									</div>
								</Col>
							</Row>
							<div className="container-register-form-btn">
								<Button className="login-form-btn">
									Register
								</Button>
							</div>
							<div className="text-center">
								<span className="txt1">
									Already have an account?
								</span>
								<a href="#" className="txt2 hov1">
									Login
								</a>
							</div>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}
