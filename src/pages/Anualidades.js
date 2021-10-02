import React, { useState } from "react";
import Input from "../components/formControl/Input";
import Radios from "../components/formControl/Radios";
import Select from "../components/formControl/Select";
import Table from "../components/Table";
import TimeLineAnualidades from "../components/TimeLineAnualidades";
import { amortizacion } from "../helpers/amortizacion";
import { anualidades } from "../helpers/anualidades";

import useForm from "../hooks/useForm";
const Anualidades = () => {
  const [error, setError] = useState({});
  const [respuesta, setRespuesta] = useState();
  const [anualidad, setAnualidad] = useState("vencida");
  const [amortizaciones, setAmortizaciones] = useState(null);
  const [form, formChange, setForm] = useForm({
    va: "",
    vf: "",
    tasa: "",
    periodo: "",
    pago: "",
    tipo: "va",
  });

  const validate = (calculate) => {
    let err = {};
    if (form.tipo === "va") {
      if (!form.va.trim() && calculate !== "va") {
        err.va = "Este campo es requerido";
      }
    }
    if (form.tipo === "vf") {
      if (!form.vf.trim() && calculate !== "vf") {
        err.vf = "Este campo es requerido";
      }
    }

    if (!form.pago.trim() && calculate !== "pago") {
      err.pago = "Este campo es requerido";
    }
    if (!form.tasa.trim() && calculate !== "tasa") {
      err.tasa = "Este campo es requerido";
    }
    if (!form.periodo.trim() && calculate !== "periodo") {
      err.periodo = "Este campo es requerido";
    }

    if (!anualidad.trim()) {
      err.anualidad = "Seleleccione un tipo de anualidad que deseas calcular";
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

  const handleCalculate = (variable) => {
    if (validate(variable)) {
      let respuesta;
      respuesta = anualidades(anualidad, form.tipo, variable, form, setForm);
      setRespuesta(respuesta);
    }
  };

  const validateAmortizacion = () => {
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

  const amortizar = () => {
    if (validateAmortizacion()) {
      let respuesta = amortizacion({
        va: form.va,
        tasa: form.tasa,
        pago: form.pago,
      });

      setAmortizaciones(respuesta);
    }
  };
  return (
    <div className="row">
      <div className="col-xl-5 mx-auto">
        <div>
          <form className="bg-gradient-gray shadow rounded-5 p-5 ">
            <div className="row ">
              <div className="text-center">
                <h1>Calculadora de anualidades</h1>
                <p className="fst-italic">
                  Calcule sus anualidades vencidas y anticipadas de manera fácil
                  ingresando tres valores
                </p>
              </div>

              <div className="mb-2">
                <Select
                  attr={{ name: "anualidad", defaultValue: anualidad }}
                  label="Tipo de anualidad"
                  help="seleccione 'Anualidad vencida' si el pago es al finalizar 
                  el periodo o 'Anualidad anticipada' si el pago es al inicio de cada periodo"
                  options={[
                    { id: "vencida", value: "Anualidad vencida" },
                    { id: "anticipada", value: "Anualidad anticipada" },
                  ]}
                  error={error?.anualidad}
                  onChange={(e) => {
                    setAnualidad(e.target.value);
                  }}
                />
              </div>

              <div className="mb-2 text-center">
                <Radios
                  attr={{ name: "tipo", onClick: () => setError(null) }}
                  values={[
                    { value: "va", help: "Valor actual" },
                    { value: "vf", help: "Valor futuro" },
                  ]}
                  checked={form?.tipo}
                  label="¿Qué quieres calcular?"
                  onChange={formChange}
                  help="Selecciona la variable que quieras calcular"
                />
              </div>

              {form?.tipo !== "" && (
                <>
                  {form.tipo === "va" && (
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
                  )}
                  {form.tipo === "vf" && (
                    <div className="mb-2 col-6">
                      <Input
                        attr={{
                          name: "vf",
                          type: "number",
                          value: form.vf,
                        }}
                        onChange={formChange}
                        label="Valor futuro"
                        help="Valor futuro"
                        error={error?.vf}
                      />
                    </div>
                  )}
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
                  <div className="mb-2 col-6">
                    <Input
                      attr={{
                        name: "periodo",
                        type: "number",
                        value: form.periodo,
                      }}
                      onChange={formChange}
                      label="Periodo"
                      help="Cantidad de periodos "
                      error={error?.periodo}
                    />
                  </div>

                  <div className="text-center">
                    {form.tipo === "va" && (
                      <button
                        type="button"
                        className="btn btn-primary m-1"
                        onClick={() => {
                          handleCalculate("va");
                        }}
                      >
                        Calcular valor actual
                      </button>
                    )}
                    {form.tipo === "vf" && (
                      <button
                        type="button"
                        className="btn btn-primary m-1"
                        onClick={() => {
                          handleCalculate("vf");
                        }}
                      >
                        Calcular valor final
                      </button>
                    )}

                    <button
                      type="button"
                      className="btn btn-primary m-1"
                      onClick={() => {
                        handleCalculate("pago");
                      }}
                    >
                      Calcular pago
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary m-1"
                      onClick={() => {
                        handleCalculate("tasa");
                      }}
                    >
                      Calcular tasa
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary m-1"
                      onClick={() => {
                        handleCalculate("periodo");
                      }}
                    >
                      Calcular numero de periodos
                    </button>
                  </div>

                  {form.tipo === "va" && anualidad === "vencida" && (
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={amortizar}
                      >
                        mostrar amortización
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </form>
          {respuesta && (
            <div className=" px-5  mt-3">
              <h3> Respuesta : {respuesta}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="col-xl-6 mx-auto">
        <TimeLineAnualidades />
      </div>

      {amortizaciones && <Table data={amortizaciones} />}
    </div>
  );
};

export default Anualidades;
