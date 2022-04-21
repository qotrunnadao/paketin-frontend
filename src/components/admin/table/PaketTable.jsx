import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEdit,
	faTrash,
	faBox,
	faInfo,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/Table.css";
import ToolkitProvider, {
	Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deletePaket } from "../../../redux/actions/PaketAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
	swal({
		title: "Apakah Anda yakin akan menghapus data ini ?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			dispatch(deletePaket(id));
			swal("Data Paket Sukses dihapus", {
				icon: "success",
			});
		} else {
			swal("Data gagal dihapus");
		}
	});
};

const defaultSorted = [
	{
		dataField: "id",
		order: "asc",
	},
];

// memanggil state global menjadi props
const mapStateToProps = (state) => {
	return {
		getPaketList: state.paket.getPaketList,
		errorPaketList: state.paket.errorPaketList,
	};
};

const PaketTable = (props) => {
	const columns = [
		{
			dataField: "id",
			text: "ID",
			sort: true,
			headerStyle: () => {
				return { width: "5%" };
			},
		},
		{
			dataField: "nomor_resi",
			text: "Nomor Resi",
			sort: true,
		},
		{
			dataField: "produk",
			text: "Nama Produk",
			sort: true,
		},
		{
			dataField: "link",
			text: "Action",
			formatter: (rowContent, row) => {
				return (
					<div>
						<Link to={"/detail-paket/" + row.id}>
							<Button color="dark" className="button-aksi">
								<FontAwesomeIcon icon={faInfo} /> Detail
							</Button>
						</Link>

						<Link to={"/edit-paket/" + row.id}>
							<Button color="warning" className="button-aksi">
								<FontAwesomeIcon icon={faEdit} /> Edit
							</Button>
						</Link>

						<Button
							color="danger"
							className="button-aksi"
							onClick={() => handleClick(props.dispatch, row.id)}
						>
							<FontAwesomeIcon icon={faTrash} /> Delete
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div>
			{props.getPaketList ? (
				<ToolkitProvider
					bootstrap4
					keyField="id"
					data={props.getPaketList}
					columns={columns}
					defaultSorted={defaultSorted}
					search
				>
					{(props) => (
						<div>
							<Row>
								<Col>
									<Link to="/create-paket">
										<Button
											color="primary"
											className="mr-2 mb-3"
										>
											<FontAwesomeIcon icon={faBox} />{" "}
											Create Paket
										</Button>
									</Link>
								</Col>
								<Col>
									<div className="search-bar">
										<SearchBar
											{...props.searchProps}
											placeholder="Search .."
										/>
									</div>
								</Col>
							</Row>

							<BootstrapTable
								{...props.baseProps}
								pagination={paginationFactory()}
							/>
						</div>
					)}
				</ToolkitProvider>
			) : (
				<div className="text-center">
					{props.errorPaketList ? (
						<h4>{props.errorPaketList}</h4>
					) : (
						<Spinner color="dark" />
					)}
				</div>
			)}
		</div>
	);
};

export default connect(mapStateToProps, null)(PaketTable);
