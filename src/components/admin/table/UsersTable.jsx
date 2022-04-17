import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
	Container,
	Card,
	CardTitle,
	CardBody,
	Button,
	Row,
	Col,
	Spinner,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {
	Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SearchBar } = Search;

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
		dataField: "nama_kantor",
		text: "Nama Kantor",
		sort: true,
	},
	{
		dataField: "nama_admin",
		text: "Nama Admin",
		sort: true,
	},
	{
		dataField: "nomor_kantor",
		text: "Nomor Kantor",
		sort: true,
	},
	{
		dataField: "alamat_kantor",
		text: "Alamat Kantor",
		sort: true,
	},
	{
		dataField: "password",
		text: "Password",
		sort: true,
	},
	{
		dataField: "link",
		text: "Action",
		formatter: (rowContent, row) => {
			return (
				<div>
					<Link to={"edit-user/" + row.id}>
						<Button color="warning" className="mr-2">
							<FontAwesomeIcon icon={faEdit} /> Edit
						</Button>
					</Link>
					<Button color="danger" className="">
						<FontAwesomeIcon icon={faTrash} /> Delete
					</Button>
				</div>
			);
		},
	},
];

const defaultSorted = [
	{
		dataField: "id",
		order: "asc",
	},
];

// memanggil state global menjadi props
const mapStateToProps = (state) => {
	return {
		getUsersList: state.users.getUsersList,
		errorUsersList: state.users.errorUsersList,
	};
};

const UsersTable = (props) => {
	return (
		<Container className="my-5">
			<Card>
				<CardBody>
					<CardTitle tag="h4" className="mb-3">
						Data User Paketin
					</CardTitle>
					{props.getUsersList ? (
						<ToolkitProvider
							bootstrap4
							keyField="id"
							data={props.getUsersList}
							columns={columns}
							defaultSorted={defaultSorted}
							search
						>
							{(props) => (
								<div>
									<Row className="mb-3">
										<Col>
											<Link to="/create-user">
												<Button color="primary">
													<FontAwesomeIcon
														icon={faUserPlus}
													/>{" "}
													Create User
												</Button>
											</Link>
										</Col>
										<Col className="float-right">
											<div>
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
							{props.errorUsersList ? (
								<h4>{props.errorUsersList}</h4>
							) : (
								<Spinner color="dark" />
							)}
						</div>
					)}
				</CardBody>
			</Card>
		</Container>
	);
};

export default connect(mapStateToProps, null)(UsersTable);
