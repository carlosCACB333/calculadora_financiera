import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Simple from "../pages/Simple";

const AppRouter = () => {
  return (
    <>
      <SideBar />
      <main
        className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg "
        id="mainContent"
      >
        <NavBar />
        <div className="container-fluid py-4 ">
          {/* paginas de la applicacion */}
          <Simple />
        </div>
      </main>
    </>
  );
};

export default AppRouter;
