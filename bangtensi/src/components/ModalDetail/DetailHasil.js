import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "../../css/App.css";

const DetailHasil = ({ id }) => {
  const [Hasil, setHasil] = useState({
    nama: "",
    penyelenggara: "",
    jp: "",
    narasumber: "",
    tempat: "",
    tgl_mulai: "",
    tgl_selesai: "",
    nota: "",
    absen: "",
    materi: "",
    dokumentasi: "",
    status: "",
    file: "",
  });
  const [Tampil, setTampil] = useState({
    nama: "",
    penyelenggara: "",
    jp: "",
    narasumber: "",
    tempat: "",
    tgl_mulai: "",
    tgl_selesai: "",
    nota: "",
    absen: "",
    materi: "",
    dokumentasi: "",
    status: "",
    file: "",
  });

  const getdata = async () => {
    await axios
      .get(`http://localhost:3200/data_hasil/${id}`)
      .then((result) => setHasil(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    setTampil({
      ...Tampil,
      nama: Hasil?.nama,
      penyelenggara: Hasil?.penyelenggara,
      jp: Hasil?.jp,
      narasumber: Hasil?.narasumber,
      tempat: Hasil?.tempat,
      tgl_mulai: Hasil?.tgl_mulai,
      tgl_selesai: Hasil?.tgl_selesai,
      nota: Hasil?.nota,
      absen: Hasil?.absen,
      materi: Hasil?.materi,
      status: Hasil?.status,
      file: Hasil?.file,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Hasil]);
  return (
    <>
      <Modal.Body>
        <Card style={{ width: "29rem" }}>
          <Card.Body>
            <Card.Title>Nama Kompetensi :</Card.Title>
            <Card.Text name="nama" value={Tampil?.nama} onChange={(e) => setTampil({ ...Tampil, nama: e.target.value })} required />
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};

export default DetailHasil;
