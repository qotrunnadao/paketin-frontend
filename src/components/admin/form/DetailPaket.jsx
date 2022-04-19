import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
	return {
		getPaketDetail: state.paket.getPaketDetail,
		errorPaketDetail: state.paket.errorPaketDetail,
	};
};

const DetailPaket = (props) => {
	return (
		<Table striped>
			<tbody>
				<tr>
					<td width="30">Nama Produk</td>
					<td width="10">:</td>
					<td>{props.getPaketDetail.produk}</td>
				</tr>
				<tr>
					<td width="30">Berat Paket</td>
					<td width="10">:</td>
					<td>{props.getPaketDetail.berat_paket}</td>
				</tr>
				<tr>
					<td width="30">Nama Pengirim</td>
					<td width="10">:</td>
					<td>{props.getPaketDetail.nama_pengirim}</td>
				</tr>
				<tr>
					<td width="30">Nama_penerima</td>
					<td width="10">:</td>
					<td>{props.getPaketDetail.nama_penerima}</td>
				</tr>
				<tr>
					<td width="30">Nomor Penerima</td>
					<td width="10">:</td>
					<td>{props.getPaketDetail.nomor_penerima}</td>
				</tr>
				<tr>
					<td width="30">Alamat Tujuan</td>
					<td width="10">:</td>
					<td>{props.getPaketDetail.alamat_tujuan}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default connect(mapStateToProps, null)(DetailPaket);
