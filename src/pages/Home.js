import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="text-center">
      <Link
        to="/simple"
        className="btn shadow bg-gradient-purple m-2  rounded-3"
      >
        <h2>Calculadora financiera</h2>
        <small>
          Calcule el interés simple y compuesto de una manera muy sencilla con
          nuestra applicación web
        </small>
      </Link>
      <Link
        to="/anualidades"
        className="btn shadow bg-gradient-purple m-2  rounded-3"
      >
        <h2>Calculadora de anualidades</h2>
        <small>
          Calcule la anualidad vencida y anticipada de una manera muy sencilla
          con nuestra applicación web
        </small>
      </Link>
      <Link
        to="/amortizacion"
        className="btn shadow bg-gradient-purple m-2  rounded-3"
      >
        <h2>Calculadora de amortización</h2>
        <small>
          Calcule la amortizacion de una anualidad vencida de manera muy
          sencilla con nuestra applicación web
        </small>
      </Link>
    </div>
  );
};

export default Home;
