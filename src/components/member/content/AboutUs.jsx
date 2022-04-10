import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../assets/css/AboutUs.css";

function AboutUs() {
	return (
		<section id="about" className="about">
			<Container data-aos="fade-up">
				<Row className="gx-0">
					<Col
						className="col-lg-6 d-flex flex-column justify-content-center"
						data-aos="fade-up"
						data-aos-delay={200}
					>
						<div className="content">
							<header className="section-header mb-5 text-center">
								<h2>About Us</h2>
							</header>
							<h2>
								Paketin merupakan jasa pengiriman barang di
								indonesia dengan kemudahan dan kecepatan dalam
								mengecek status setiap resi. Cukup masukkan
								nomor resi, kamu bisa langsung mengetahui posisi
								paket setelah menentukan pilihan kurir yang
								digunakan.
							</h2>
							<p>
								Layanan kami memudahkan pengirim dan penerima
								paket untuk mengetahui status resi atau
								keberadaan paket yang sedang dikirim. Setiap
								hari ratusan ribu nomor resi dari berbagai kurir
								pengiriman dilacak melalui website, widget, dan
								aplikasi mobile. Apapun ekspedisi yang kamu
								gunakan, kamu bisa tracking resi jasa pengiriman
								barang di satu tempat saja. Mengenali otomatis
								(auto detect) resi dari 60 ekspedisi pengiriman.
							</p>
						</div>
					</Col>
					<div
						className="col-lg-6 d-flex align-items-center"
						data-aos="zoom-out"
						data-aos-delay={200}
					>
						<img
							src="assets/img/about.jpg"
							className="img-fluid"
							alt
						/>
					</div>
				</Row>
			</Container>
		</section>
	);
}

export default AboutUs;
