import React, { useState } from "react";
import Input from "../components/formControl/Input";
import TablaRations from "../components/TablaRations";
import { ratios } from "../helpers/ratios";
import useForm from "../hooks/useForm";

const Ratios = () => {
  const [error, setError] = useState({});
  const [respuesta, setRespuesta] = useState(null);
  const [form, formChange] = useForm({
    activos_corr: "",
    activos_nocorr: "",
    pastivo_corr: "",
    pastivo_nocorr: "",
    efectivo: "",
    inventario: "",
    costo_ventas: "",
    ganancia_neta: "",
    venta_neta: "",
    patrimonio: "",
  });

  const handleValidate = () => {
    let err = {};

    if (!form.activos_corr.trim()) {
      err.activos_corr = "Este campo es requerido";
    }
    if (!form.activos_nocorr.trim()) {
      err.activos_nocorr = "Este campo es requerido";
    }
    if (!form.pastivo_corr.trim()) {
      err.pastivo_corr = "Este campo es requerido";
    }
    if (!form.pastivo_nocorr.trim()) {
      err.pastivo_nocorr = "Este campo es requerido";
    }
    if (!form.efectivo.trim()) {
      err.efectivo = "Este campo es requerido";
    }
    if (!form.inventario.trim()) {
      err.inventario = "Este campo es requerido";
    }
    if (!form.costo_ventas.trim()) {
      err.costo_ventas = "Este campo es requerido";
    }
    if (!form.ganancia_neta.trim()) {
      err.ganancia_neta = "Este campo es requerido";
    }
    if (!form.venta_neta.trim()) {
      err.venta_neta = "Este campo es requerido";
    }
    if (!form.patrimonio.trim()) {
      err.patrimonio = "Este campo es requerido";
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

  const handleCalculate = () => {
    if (handleValidate()) {
      setRespuesta(ratios(form));
    }
  };
  return (
    <div className="row">
      <div className="col-xl-5 mx-auto">
        <div>
          <form className="bg-gradient-gray shadow rounded-5 p-5 ">
            <div className="row ">
              <div className="text-center">
                <h1>Calculadora Ratios Financieros</h1>
                <p className="fst-italic">Calcule ratios financieros</p>
              </div>

              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "activos_corr",
                    type: "number",
                    value: form.activos_corr,
                  }}
                  onChange={formChange}
                  label="Activos Corrientes"
                  error={error?.activos_corr}
                  help="Activos corrientes"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "activos_nocorr",
                    type: "number",
                    value: form.activos_nocorr,
                  }}
                  onChange={formChange}
                  label="Activos no Corrientes"
                  error={error?.activos_nocorr}
                  help="Activos no corrientes"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "pastivo_corr",
                    type: "number",
                    value: form.pastivo_corr,
                  }}
                  onChange={formChange}
                  label="Pasivo Corrientes"
                  error={error?.pastivo_corr}
                  help="Pasivo corrientes"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "pastivo_nocorr",
                    type: "number",
                    value: form.pastivo_nocorr,
                  }}
                  onChange={formChange}
                  label="Pasivo no Corrientes"
                  error={error?.pastivo_nocorr}
                  help="Pasivo no corrientes"
                />
              </div>

              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "efectivo",
                    type: "number",
                    value: form.efectivo,
                  }}
                  onChange={formChange}
                  label="Efectivo y equivalentes"
                  error={error?.efectivo}
                  help="Efectivo y equivalentes"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "inventario",
                    type: "number",
                    value: form.inventario,
                  }}
                  onChange={formChange}
                  label="Inventario"
                  error={error?.inventario}
                  help="Inventario"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "costo_ventas",
                    type: "number",
                    value: form.costo_ventas,
                  }}
                  onChange={formChange}
                  label="Costo de ventas "
                  error={error?.costo_ventas}
                  help="Costo de ventas"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "ganancia_neta",
                    type: "number",
                    value: form.ganancia_neta,
                  }}
                  onChange={formChange}
                  label="Ganancia neta"
                  error={error?.ganancia_neta}
                  help="Ganancia neta"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "venta_neta",
                    type: "number",
                    value: form.venta_neta,
                  }}
                  onChange={formChange}
                  label="Venta neta"
                  error={error?.venta_neta}
                  help="Venta neta"
                />
              </div>
              <div className="mb-2 col-6">
                <Input
                  attr={{
                    name: "patrimonio",
                    type: "number",
                    value: form.patrimonio,
                  }}
                  onChange={formChange}
                  label="Patrimonio"
                  error={error?.patrimonio}
                  help="Patrimonio"
                />
              </div>

              <button
                type="button"
                className="btn btn-primary m-1"
                onClick={handleCalculate}
              >
                Calcular Ratios Financieros
              </button>
            </div>
          </form>
        </div>
      </div>
      {respuesta && (
        <div className="col-xl-5 mx-auto">
          <TablaRations data={respuesta} />
        </div>
      )}
    </div>
  );
};

export default Ratios;
