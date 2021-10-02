import React from "react";

const Table = ({ data }) => {
  return (
    <div className="col-xl-6 mx-auto mb-2">
      <div
        className="shadow rounded-5 bg-gradient-gray p-5 table-responsive scroll"
        style={{ maxHeight: "85vh" }}
      >
        <h4 className="text-primary"> Tabla de amortizaciones</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">mes</th>
              <th scope="col">amortizacion</th>
              <th scope="col">interes</th>
              <th scope="col">abono</th>
              <th scope="col">saldo en soluto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((valor, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{valor.amortizacion.toFixed(2)}</td>
                <td>{valor.interes.toFixed(2)}</td>
                <td>{valor.abono.toFixed(2)}</td>
                <td>{valor.soluto.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
