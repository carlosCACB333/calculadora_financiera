import React from "react";

const SideBar = () => {
  return (
    <aside
      className="navbar navbar-vertical border-0 border-radius-xl  
      position-fixed  scroll animate__animated animate__fadeInLeft
      bg-dark top-0 bottom-0"
      id="sideBar"
      style={{ maxHeight: "100vh" }}
    >
      <div className="my-3 ms-1 logo">
        <i className="fa fa-hand-holding-usd" style={{ fontSize: "2rem" }}></i>

        <span className="ms-1 fw-bold">Calculadora Financiera</span>
      </div>
      <hr className="divider mt-0" />
      <div className="w-auto">
        <ul className="navbar-nav ps-3">
          <li className="nav-item mt-3">
            <small
              className="nav-link-text ms-2 text-uppercase fw-bold opacity-50"
              style={{ fontSize: ".75em" }}
            >
              Calculadoras
            </small>
          </li>
          <li className="nav-item m-1">
            <a
              className="nav-link rounded-3 active"
              href="../pages/dashboard.html"
            >
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3 ">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Interés simple</span>
              </div>
            </a>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3 ">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item mt-3">
            <span
              className="nav-link-text ms-2 text-uppercase fw-bold opacity-50"
              style={{ fontSize: ".75em" }}
            >
              Calculadoras
            </span>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
          <li className="nav-item m-1">
            <a className="nav-link rounded-3 " href="../pages/dashboard.html">
              <div className="p-2 txt-dark">
                <span className="icon shadow p-2 rounded-3">
                  <i className="fa fa-hand-holding-usd "></i>
                </span>
                <span className="nav-link-text ms-1">Dashboard</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
