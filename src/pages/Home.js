import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="text-center">
      <Link
        to="/simple"
        className="btn shadow bg-gradient-purple m-2  rounded-3"
      >
        <h2>Interes simple</h2>
        <small>Calcual el interes simple de una manera muy sencilla</small>
      </Link>
      <Link to="/" className="btn shadow bg-gradient-purple m-2 rounded-3">
        <h2>Interes compuesto</h2>
        <small>Calcual el interes compuesto de una manera muy sencilla</small>
      </Link>
    </div>
  );
};

export default Home;
