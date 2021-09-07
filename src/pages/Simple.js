import React, { useState } from "react";
import Input from "../components/formControl/Input";
import Radios from "../components/formControl/Radios";
import Select from "../components/formControl/Select";
import { interesCompuesto, interesSimple } from "../helpers/financiera";
import useForm from "../hooks/useForm";
const Simple = () => {
  const [error, setError] = useState({});
  const [respuesta, setRespuesta] = useState();
  const [option, setOption] = useForm({ tipo: "" });
  const [financiera, setFinanciera] = useState("simple");
  const [form, formChange, setForm] = useForm({
    capital: "",
    tiempo: "",
    tasa: "",
    interes: "",
    tipo_interes: "12",
    tipo_tiempo: "12",
  });

  const validate = () => {
    let err = {};
    if (!form.capital.trim() && option.tipo !== "capital") {
      err.capital = "Este campo es requerido";
    }
    if (!form.tiempo.trim() && option.tipo !== "tiempo") {
      err.tiempo = "Este campo es requerido";
    }
    if (!form.tasa.trim() && option.tipo !== "tasa") {
      err.tasa = "Este campo es requerido";
    }
    if (!form.interes.trim() && option.tipo !== "interes") {
      err.interes = "Este campo es requerido";
    }
    if (!form.tipo_interes.trim() && option.tipo !== "tipo_interes") {
      err.tipo_interes = "Este campo es requerido";
    }
    if (!form.tipo_tiempo.trim() && option.tipo !== "tipo_tiempo") {
      err.tipo_tiempo = "Este campo es requerido";
    }

    if (!financiera.trim()) {
      err.financiera = "Seleleccione un tipo de interés";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      let respuesta;
      if (financiera === "simple") {
        respuesta = interesSimple(option.tipo, form, setForm);
      } else if (financiera === "compuesto") {
        respuesta = interesCompuesto(option.tipo, form, setForm);
      }
      setRespuesta(respuesta);
    }
  };
  return (
    <div className="row">
      <div className="col-xl-6 m-auto">
        <div>
          <form
            className="bg-gradient-gray shadow rounded-5 p-5 "
            onSubmit={handleSubmit}
          >
            <div className="row ">
              <div className="text-center">
                <h1>Calculadora financiera</h1>
                <p className="fst-italic">
                  Calcule su interés simple y compuesto de manera fácil
                  ingresando tres valores
                </p>
              </div>

              <div className="mb-2">
                <Select
                  attr={{ name: "finaciera", defaultValue: financiera }}
                  label="Tipo de interés"
                  help="Seleccione el tipo de interés que desea calcular"
                  options={[
                    { id: "simple", value: "Interés simple" },
                    { id: "compuesto", value: "interés compuesto" },
                  ]}
                  error={error?.financiera}
                  onChange={(e) => {
                    setFinanciera(e.target.value);
                  }}
                />
              </div>

              <div className="mb-2 text-center">
                <Radios
                  attr={{ name: "tipo", onClick: () => setError(null) }}
                  values={[
                    { value: "capital", help: "Capital inicial" },
                    { value: "tiempo", help: "Periodo de tiempo" },
                    { value: "tasa", help: "Tasa de interés" },
                    {
                      value: "interes",
                      help:
                        financiera === "simple" ? "Interés" : "Capital final",
                    },
                  ]}
                  checked={option?.tipo}
                  label="¿Qué quieres calcular?"
                  onChange={setOption}
                  help="Selecciona la variable que quieras calcular"
                />
              </div>

              {option.tipo !== "" && (
                <>
                  <div className="mb-2">
                    <Input
                      attr={{
                        name: "capital",
                        type: "number",
                        value: form.capital,
                        disabled: option.tipo === "capital",
                      }}
                      onChange={formChange}
                      label="Capital inicial"
                      help="Capital inicial o Valor actual"
                      error={error?.capital}
                    />
                  </div>

                  <div className="mb-2 col-8">
                    <Input
                      attr={{
                        name: "tiempo",
                        type: "number",
                        value: form.tiempo,
                        disabled: option.tipo === "tiempo",
                      }}
                      onChange={formChange}
                      label="Periodo de tiempo"
                      help="Ingrese el periodo de tiempo"
                      error={error?.tiempo}
                    />
                  </div>
                  <div className="mb-2 col-4">
                    <Select
                      attr={{
                        name: "tipo_tiempo",
                        defaultValue: form.tipo_tiempo || "4",
                      }}
                      onChange={formChange}
                      label="Tipo de tiempo"
                      options={[
                        { id: "1", value: "meses" },
                        { id: "2", value: "bimestres" },
                        { id: "3", value: "trimestres" },
                        { id: "4", value: "cuatrimestres" },
                        { id: "12", value: "años" },
                      ]}
                      error={error?.tipo_tiempo}
                    />
                  </div>

                  <div className="mb-2 col-8">
                    <Input
                      attr={{
                        name: "tasa",
                        type: "number",
                        value: form.tasa,
                        disabled: option.tipo === "tasa",
                      }}
                      onChange={formChange}
                      label="Tasa de interés"
                      help="Ingrese la tasa en porcentaje (%)"
                      error={error?.tasa}
                    />
                  </div>
                  <div className="mb-2 col-4">
                    <Select
                      attr={{
                        name: "tipo_interes",
                        defaultValue: form.tipo_interes || "4",
                      }}
                      onChange={formChange}
                      label="Tipo de interes"
                      options={[
                        { id: "1", value: "mensual" },
                        { id: "2", value: "bimestral" },
                        { id: "3", value: "trimestral" },
                        { id: "4", value: "cuatrimestral" },
                        { id: "12", value: "anual" },
                      ]}
                      error={error?.tipo_interes}
                    />
                  </div>

                  <div className="mb-2 ">
                    <Input
                      attr={{
                        name: "interes",
                        type: "number",
                        value: form.interes,
                        disabled: option.tipo === "interes",
                      }}
                      onChange={formChange}
                      label={
                        financiera === "simple" ? "Interés" : "Capital Final"
                      }
                      help={
                        financiera === "simple"
                          ? "Interés ganado en un tiempo dado"
                          : "Valor final dado dado un tiempo"
                      }
                      error={error?.interes}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Calcular
                  </button>
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
    </div>
  );
};

export default Simple;
