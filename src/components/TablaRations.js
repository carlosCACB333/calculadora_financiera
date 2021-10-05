import React from "react";

const TablaRations = ({ data }) => {
  return (
    <div className="table-responsive scroll">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Ratio</th>
            <th scope="col">Respuesta</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((element, index) => (
            <tr key={index}>
              <td>{element.detalle}</td>
              <td>{element.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaRations;
