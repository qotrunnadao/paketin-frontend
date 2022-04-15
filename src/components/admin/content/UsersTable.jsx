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
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {
	Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;

const columns = [
	{
		dataField: "id",
		text: "ID",
		sort: true,
		headerStyles: () => {
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
		text: "Nama_admin",
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
					<Button color="warning" className="mr-2">
						<FontAwesomeIcon icon={faEdit} /> Edit
					</Button>
					<Button color="danger" className="mr-2">
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

const UserTable = (props) => {
	return (
		<Container className="mt-3">
			<div>
				<Card>
					<CardBody>
						<CardTitle tag="h4" className="mb-3">
							Data User Paketin
						</CardTitle>
						<ToolkitProvider
							bootstrap4
							keyField="id"
							data={props.users}
							columns={columns}
							defaultSorted={defaultSorted}
							search
						>
							{(props) => (
								<div>
									<Row>
										<Col>
											<div className="float-right mb-3">
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
					</CardBody>
				</Card>
			</div>
		</Container>
	);
};

export default UserTable;
