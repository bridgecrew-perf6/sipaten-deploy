import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/App.css";
import { IconContext } from "react-icons";
import corpu1 from "../../img/corpu1.png";
import man from "../../img/man.png";
import { Nav, NavDropdown, Image } from "react-bootstrap";

const SidebarAdmin = (item) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  const UserMenu = <Image src={man} alt="" roundedCircle style={{ width: "50px" }} />;
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <span className="avatar-text">
            Halo, <b>Sahata!</b>
          </span>
          <Nav className="avatar">
            <NavDropdown title={UserMenu}>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="wrap">
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars />
                </Link>
              </li>
              <div>
                <img src={corpu1} alt="corpu" className="corpu" />
                <h2 className="nav-text-corpu">
                  Corporate University <br></br> Kantor Wilayah Kementerian <br></br> Hukum dan HAM <br></br> Sumatera Utara
                </h2>
              </div>
              {item.dataNav.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SidebarAdmin;
