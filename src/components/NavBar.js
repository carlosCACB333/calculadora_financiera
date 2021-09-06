import React, { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const handleShowHiden = () => {
    setShow(!show);
    const sideBar = document.getElementById("sideBar");
    const mainContent = document.getElementById("mainContent");
    if (show) {
      sideBar.style.display = "none";
      mainContent.style.marginLeft = "0";
    } else {
      sideBar.style.display = "block";
      mainContent.style.marginLeft = "";
    }
  };
  return (
    <nav className="navbar">
      <div className="container-fluid flex-nowrap">
        <div className="d-flex flex-nowrap">
          <button type="button" className="btn" onClick={handleShowHiden}>
            <i className="fa fa-solid fa-bars"></i>
          </button>
          <span className="navbar-brand">Dashboard</span>
        </div>
        <form className="d-flex col-md-6">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="button">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
