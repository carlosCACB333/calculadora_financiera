import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Simple from "../pages/Simple";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <HashRouter>
      <SideBar />
      <main
        className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg "
        id="mainContent"
      >
        <div>
          <NavBar />
          <div className="container-fluid py-4 ">
            {/* paginas de la applicacion */}
            <Switch>
              <Route exact path="/simple" component={Simple} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </main>
    </HashRouter>
  );
};

export default AppRouter;
