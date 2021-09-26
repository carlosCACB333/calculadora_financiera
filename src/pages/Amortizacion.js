import React, { useState } from "react";
import Input from "../components/formControl/Input";
import Table from "../components/Table";
import { amortizacion } from "../helpers/amortizacion";

import useForm from "../hooks/useForm";
const Amortizacion = () => {
  const [error, setError] = useState({});
  const [respuesta, setRespuesta] = useState();
  const [form, formChange] = useForm({
    va: "",
    pago: "",
    tasa: "",
  });

  const validate = () => {
    let err = {};

    if (!form.va.trim()) {
      err.va = "Este campo es requerido";
    }

    if (!form.pago.trim()) {
      err.pago = "Este campo es requerido";
    }
    if (!form.tasa.trim()) {
      err.tasa = "Este campo es requerido";
    }

    if (JSON.stringify(err) === "{}") {
      setError({});
      return true;
    } else {
      setError(err);
      setRespuesta(null);
      return false;
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (validate()) {
      let respuesta = amortizacion(form);
      setRespuesta(respuesta);
    }
  };
  return (
    <div className="row">
      <div className="col-xl-6 mx-auto mb-2">
        <div>
          <form
            className="bg-gradient-gray shadow rounded-5 p-5 "
            onSubmit={handleCalculate}
          >
            <div className="row ">
              <div className="text-center">
                <h1>Calculadora de amortización</h1>
                <p className="fst-italic">
                  Calcule sus amortizaciones de deuda de manera fácil
                </p>
              </div>

              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "va",
                    type: "number",
                    value: form.va,
                  }}
                  onChange={formChange}
                  label="Valor actual"
                  help="Valor actual"
                  error={error?.va}
                />
              </div>

              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "pago",
                    type: "number",
                    value: form.pago,
                  }}
                  onChange={formChange}
                  label="Pago"
                  help="Pago o renta por periodo"
                  error={error?.pago}
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "tasa",
                    type: "number",
                    value: form.tasa,
                  }}
                  onChange={formChange}
                  label="Tasa"
                  help="Tasa de interes efectiva (en %) "
                  error={error?.tasa}
                />
              </div>

              <button type="submit" className="btn btn-primary m-1">
                Calcular
              </button>
            </div>
          </form>
        </div>
      </div>
      {respuesta && <Table data={respuesta} />}
    </div>
  );
};

export default Amortizacion;
