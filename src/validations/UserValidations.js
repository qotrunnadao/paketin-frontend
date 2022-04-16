const UserValidation = (values) => {
	const errors = {};

	if (!values.nama_kantor || values.nama_kantor === "") {
		errors.nama_kantor = "Nama kantor harus diisi";
	}

	if (!values.nama_admin || values.nama_admin === "") {
		errors.nama_admin = "Nama admin harus diisi";
	}

	if (!values.alamat_kantor || values.alamat_kantor === "") {
		errors.alamat_kantor = "Alamat kantor harus diisi";
	}

	if (!values.nomor_kantor || values.nomor_kantor === "") {
		errors.nomor_kantor = "Nomor kantor harus diisi";
	}

	return errors;
};

export default UserValidation;
