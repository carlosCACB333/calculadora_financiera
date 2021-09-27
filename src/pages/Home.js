import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-lg-4  mb-2 ">
          <div
            style={{ height: "100%" }}
            className="shadow bg-gradient-purple  rounded-3"
          >
            <Link to="/simple" className="btn">
              <h2>Calculadora de interés simple y compuesto</h2>
              <small>
                Calcule el interés simple y compuesto de una manera muy sencilla
                con nuestra applicación web
              </small>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 mb-2">
          <div
            style={{ height: "100%" }}
            className="shadow bg-gradient-purple rounded-3"
          >
            <Link to="/anualidades" className="btn">
              <h2>Calculadora de anualidades</h2>
              <small>
                Calcule la anualidad vencida y anticipada de una manera muy
                sencilla con nuestra applicación web
              </small>
            </Link>
          </div>
        </div>
        <div className="col-lg-4  mb-2">
          <div
            style={{ height: "100%" }}
            className="shadow bg-gradient-purple  rounded-3"
          >
            <Link to="/amortizacion" className="btn">
              <h2>Calculadora de amortización</h2>
              <small>
                Calcule la amortizacion de una anualidad vencida de manera muy
                sencilla con nuestra applicación web
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
