import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import Cross from "../../img/remove.png";
import axios from "axios";
import "sweetalert2/src/sweetalert2.scss";
import Success from "../../img/check.png";
import "../../css/App.css";

const EditFormUsulan = ({ id }) => {
  const [Usulan, setUsulan] = useState({
    nama: "",
    penyelenggara: "",
    jp: "",
    narasumber: "",
    tempat: "",
    tgl_mulai: "",
    tgl_selesai: "",
    nota: "",
    peserta: "",
  });
  const [update, setUpdate] = useState({
    nama: "",
    penyelenggara: "",
    jp: "",
    narasumber: "",
    tempat: "",
    tgl_mulai: "",
    tgl_selesai: "",
    nota: "",
    peserta: "",
  });
  const getdata = async () => {
    await axios
      .get(`http://localhost:3200/data_usulan/${id}`)
      .then((result) => setUsulan(result.data))
      .catch((err) => console.log(err));
  };
  const submitedHandle = async (e) => {
    try {
      let url = `http://localhost:3200/data_usulan//${id}`;
      await axios.put(url, update);
      // window.location.reload();
      // console.log("data-update", update);
      Swal.fire({
        imageUrl: `${Success}`,
        imageWidth: 100,
        imageHeight: 100,
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#3BB54A",
        title: "Berhasil di Update",
      });
    } catch (error) {
      if (error.response.status === 400) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
    }
  };
  console.log("dataAwal", Usulan);
  console.log("id edit", id);
  // console.log("dataUpdate", update);
  // console.log("id edit", dataId);
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    setUpdate({
      ...update,
      nama: Usulan?.nama,
      penyelenggara: Usulan?.penyelenggara,
      jp: Usulan?.jp,
      narasumber: Usulan?.narasumber,
      tempat: Usulan?.tempat,
      tgl_mulai: Usulan?.tgl_mulai,
      tgl_selesai: Usulan?.tgl_selesai,
      nota: Usulan?.nota,
      peserta: Usulan?.peserta,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Usulan]);
  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama kompetensi" name="nama" value={update?.nama} onChange={(e) => setUpdate({ ...update, nama: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara" name="penyelenggara" value={update?.penyelenggara} onChange={(e) => setUpdate({ ...update, penyelenggara: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>JP :</Form.Label>
            <Form.Control type="number" placeholder="Masukkan jumlah JP" name="jp" value={update?.jp} onChange={(e) => setUpdate({ ...update, jp: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Narasumber :</Form.Label>
            <Form.Control type="text" placeholder="asukkan nama narasumber" name="narasumber" value={update?.narasumber} onChange={(e) => setUpdate({ ...update, narasumber: e.target.value })} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tempat :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan tempat pelaksanaan kompetensi" name="tempat" value={update?.tempat} onChange={(e) => setUpdate({ ...update, tempat: e.target.value })} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Mulai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal mulai pelaksanaan kompetensi" name="tgl_mulai" value={update?.tgl_mulai} onChange={(e) => setUpdate({ ...update, tgl_mulai: e.target.value })} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Selesai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal selesai pelaksanaan kompetensi" name="tgl_selesai" value={update?.tgl_selesai} onChange={(e) => setUpdate({ ...update, tgl_selesai: e.target.value })} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Nota Kegiatan :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan file nota kegiatan" name="nota" value={update?.nota} onChange={(e) => setUpdate({ ...update, nota: e.target.value })} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Peserta :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan file daftar peserta" name="peserta" value={update?.peserta} onChange={(e) => setUpdate({ ...update, peserta: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          type="submit"
          block
          onClick={() => {
            submitedHandle();
          }}
        >
          Edit data Usulan
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EditFormUsulan;
