import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/less/fontawesome.less";
import "animate.css";
import React from "react";
import reactDom from "react-dom";
import "./index.css";
import AppRouter from "./routers/AppRouter";

reactDom.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
