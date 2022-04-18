import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
	return {
		getUserDetail: state.users.getUserDetail,
		errorUserDetail: state.users.errorUserDetail,
	};
};

const DetailUser = (props) => {
	return (
		<Table striped>
			<tbody>
				<tr>
					<td width="30">Nama kantor</td>
					<td width="10">:</td>
					<td>{props.getUserDetail.nama_kantor}</td>
				</tr>
				<tr>
					<td width="30">Nama Admin</td>
					<td width="10">:</td>
					<td>{props.getUserDetail.nama_admin}</td>
				</tr>
				<tr>
					<td width="30">Nomor kantor</td>
					<td width="10">:</td>
					<td>{props.getUserDetail.nomor_kantor}</td>
				</tr>
				<tr>
					<td width="30">Alamat Kantor</td>
					<td width="10">:</td>
					<td>{props.getUserDetail.alamat_kantor}</td>
				</tr>
				<tr>
					<td width="30">Password</td>
					<td width="10">:</td>
					<td>{props.getUserDetail.password}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default connect(mapStateToProps, null)(DetailUser);
