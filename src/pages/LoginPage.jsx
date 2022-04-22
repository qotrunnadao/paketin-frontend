import React, { useState } from "react";
import "../assets/css/LoginPage.css";
import "../assets/css/General.css";
import { Input, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authAction } from "../redux/reducers/AuthReducer";
import { postNoRestrict } from "../service/Fetch";
import swal from "sweetalert";

const LoginPage = () => {
	// const [nama_kantor, setNamaKantor] = useState("");
	// const [password, setPassword] = useState("");
	// const dispatch = useDispatch();
	// let navigate = useNavigate();

	// const loginHandler = (e) => {
	// 	e.preventDefault();

	// 	let data = {
	// 		nama_kantor: nama_kantor,
	// 		password: password,
	// 	};

	// 	postNoRestrict("user/login", data)
	// 		.then((res) => {
	// 			dispatch(authAction.login(res.data));
	// 			res.data.role === "ROLE_MEMBER"
	// 				? navigate.push("/")
	// 				: navigate.push("/admin");
	// 		})
	// 		.catch((err) => {
	// 			if (typeof err.response.data === "string") {
	// 				swal("Error", err.response.data, "error");
	// 			}
	// 		});
	// };
	return (
		<div className="limiter">
			<div className="container-login">
				<div className="wrap-login">
					<Form className="login-form">
						<div className="login-logo">
							<img src="assets/images/logo2.png" alt="" />
						</div>
						<span className="login-form-title">
							Login to your account
						</span>
						<div className="wrap-Input">
							<Input
								className="Input"
								type="text"
								name="nama_kantor"
								placeholder="Nama Kantor"
								// onChange={(e) => setNamaKantor(e.target.value)}
							/>
							<span className="focus-Input-1" />
							<span className="focus-Input-2" />
						</div>
						<div className="wrap-Input rs1">
							<Input
								className="Input"
								type="password"
								name="pass"
								placeholder="Password"
								// onChange={(e) => setPassword(e.target.value)}
							/>
							<span className="focus-Input-1" />
							<span className="focus-Input-2" />
						</div>
						<div className="container-login-form-btn">
							<input
								type="submit"
								value="Login"
								className="login-form-btn"
							/>
						</div>
						<div className="text-center">
							<span className="txt1">Create an account?</span>
							<Link to="/register">Register</Link>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
