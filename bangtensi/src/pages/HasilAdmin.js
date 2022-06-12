import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/Sidebar/SidebarAdmin";
import BtnTambahHasil from "../components/ButtonTambah/BtnTambahHasil";
import "../css/Searchbar.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Button, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { SidebarDataAdmin } from "../components/Sidebar/SidebarDataAdmin";
import BtnDetailHasil from "../components/ButtonDetail/BtnDetailHasil";

const HasilAdmin = () => {
  const [database, setdatabase] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = database.filter((value) => {
      return value.nama.toLowerCase().includes(searchWord.toLowerCase()) || value.penyelenggara.toLowerCase().includes(searchWord.toLowerCase()) || value.status.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getdata = async () => {
    await axios
      .get(`http://localhost:3200/data_hasil`)
      .then((result) => setsearchData(result.data))
      .catch((err) => console.log(err));
  };
  const getdataBase = async () => {
    await axios
      .get(`http://localhost:3200/data_hasil`)
      .then((result) => setdatabase(result.data))
      .catch((err) => console.log(err));
  };

  const item = SidebarDataAdmin;
  const [searchData, setsearchData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    getdataBase();
  }, []);

  console.log("searchdata", searchData);
  return (
    <>
      <SidebarAdmin dataNav={item} />
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="cari data...." value={wordEntered} onChange={handleFilter} />
          <div className="searchIcon">{filteredData.length === 0 ? <AiOutlineSearch /> : <AiOutlineClose id="clearBtn" onClick={clearInput} />}</div>
        </div>
      </div>
      <BtnTambahHasil />
      <Table striped className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Kompetensi</th>
            <th>Penyelenggara</th>
            <th>JP</th>
            <th>Nota Kegiatan</th>
            <th>Detail</th>
            <th>Status</th>
            <th>Sertifikat</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length !== 0
            ? filteredData.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.nama}</td>
                  <td>{item?.penyelenggara}</td>
                  <td>{item?.jp}</td>
                  <td>
                    <Button variant="success">
                      <span className="lihat">Lihat</span>
                      <FaEye />
                    </Button>
                  </td>
                  <td>
                    <BtnDetailHasil />
                  </td>
                  <td>{item?.status}</td>
                  <td></td>
                </tr>
              ))
            : database?.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.nama}</td>
                  <td>{item?.penyelenggara}</td>
                  <td>{item?.jp}</td>
                  <td>
                    <Button variant="success">
                      <span className="lihat">Lihat</span>
                      <FaEye />
                    </Button>
                  </td>
                  <td>
                    <BtnDetailHasil />
                  </td>
                  <td>{item?.status}</td>
                  <td></td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default HasilAdmin;
