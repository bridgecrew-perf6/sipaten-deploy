import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "../../css/App.css";
import Swal from "sweetalert2";
import Success from "../../img/check.png";

const AddFormPencatatan = () => {
  const [Pencatatan, setPencatatan] = useState({
    id: uuidv4(),
    nama: "",
    nip: "",
    kompetensi: "",
    kategori: "",
    tgl_mulai: "",
    tgl_selesai: "",
    jp: "",
    sebagai: "",
    penyelenggara: "",
    narasumber: "",
    tempat: "",
    sertifikat: "",
  });

  const onInputChange = (e) => {
    setPencatatan({ ...Pencatatan, [e.target.name]: e.target.value });
  };

  const { nama, nip, kompetensi, kategori, tgl_mulai, tgl_selesai, jp, sebagai, penyelenggara, narasumber, tempat, sertifikat } = Pencatatan;
  const handleSubmit = async () => {
    await axios.post(`http://localhost:3200/data_pencatatan`, Pencatatan);
    Swal.fire({
      imageUrl: `${Success}`,
      imageWidth: 100,
      imageHeight: 100,
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#3BB54A",
      title: "Berhasil di Input",
    });
  };
  console.log("data", Pencatatan);

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Pegawai :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama pegawai" name="nama" value={nama} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>NIP :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan NIP" name="nip" value={nip} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nama Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama kompetensi" name="kompetensi" value={kompetensi} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kategori Kompetensi :</Form.Label>
            <Form.Select aria-label="Pilih kategori kompetensi" name="kategori" value={kategori} onChange={(e) => onInputChange(e)} required>
              <option value="Keuangan">Keuangan</option>
              <option value="Kepegawaian">Kepegawaian</option>
              <option value="Kepemimpinan">Kepemimpinan</option>
              <option value="Teknologi Informasi">Teknologi Informasi</option>
              <option value="Humas">Humas</option>
              <option value="BMN">BMN</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Mulai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal mulai pelaksanaan kompetensi" name="tgl_mulai" value={tgl_mulai} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Selesai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal selesai pelaksanaan kompetensi" name="tgl_selesai" value={tgl_selesai} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>JP :</Form.Label>
            <Form.Control type="number" placeholder="Masukkan jumlah JP" name="jp" value={jp} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sebagai :</Form.Label>
            <Form.Select aria-label="Masukkan peran Anda dalam kompetensi tersebut" name="sebagai" value={sebagai} onChange={(e) => onInputChange(e)} required>
              <option value="Narasumber">Narasumber</option>
              <option value="Peserta">Peserta</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara kompetensi" name="penyelenggara" value={penyelenggara} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Narasumber :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama narasumber" name="narasumber" value={narasumber} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tempat :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan tempat pelaksanaan kompetensi" name="tempat" value={tempat} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Sertifikat :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan Sertifikat" name="sertifikat" value={sertifikat} onChange={(e) => onInputChange(e)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          type="submit"
          block
          onClick={() => {
            handleSubmit();
          }}
        >
          Tambah Kompetensi Baru
        </Button>
      </Modal.Footer>
    </>
  );
};

export default AddFormPencatatan;
