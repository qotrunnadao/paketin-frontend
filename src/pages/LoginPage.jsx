import "../assets/css/LoginPage.css";
import { Input, Button, Form } from "reactstrap";

import React, { Component } from "react";

class LoginPage extends Component {
	render() {
		return (
			<div className="limiter">
				<div className="container-login">
					<div className="wrap-login">
						<Form className="login-form validate-form">
							<img src="assets/images/logo2.png" alt="" />
							<span className="login-form-title">
								Login to your account
							</span>
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
							<div className="container-login-form-btn">
								<Button className="login-form-btn">
									Login
								</Button>
							</div>
							<div className="text-center">
								<span className="txt1">Create an account?</span>
								<a href="#" className="txt2 hov1">
									Register
								</a>
							</div>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;
