const PaketValidations = (values) => {
	const errors = {};

	if (!values.produk || values.produk === "") {
		errors.produk = "Nama produk harus diisi";
	}

	if (!values.berat_paket || values.berat_paket === "") {
		errors.berat_paket = "Berat paket harus diisi";
	}

	if (!values.nama_pengirim || values.nama_pengirim === "") {
		errors.nama_pengirim = "Nama pengirim harus diisi";
	}

	if (!values.nama_penerima || values.nama_penerima === "") {
		errors.nama_penerima = "Nama penerima harus diisi";
	}

	if (!values.nomor_penerima || values.nomor_penerima === "") {
		errors.nomor_penerima = "Nomor penerima harus diisi";
	}

	if (!values.alamat_penerima || values.alamat_penerima === "") {
		errors.alamat_penerima = "Alamat penerima harus diisi";
	}

	return errors;
};

export default PaketValidations;
