import React from "react";

const TimeLineAnualidades = () => {
  return (
    <div className=" p-5 ">
      <div className="card bg-transparent h-100 border-0">
        <div className="card-header pb-0 border-0">
          <h6>Conceptos</h6>
        </div>
        <div className="card-body p-3 ">
          <div className="timeline timeline-one-side position-relative">
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Anualidad vencida
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  La anualidad vencida es aquel abono, retiro o depósito
                  frecuente que se efectúa al final de cada periodo de pago
                  pactado.
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Anualidad Anticipada
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  La anualidad anticipada es aquélla cuyos pagos se realizan al
                  principio de cada período
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Valor actual (VA)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  Es la forma de valorar activos, cuyo cálculo es el descontar
                  el flujo futuro en base a una tasa de rentabilidad ofrecida
                  por alternativas de inversión comparables, denominada costo de
                  capital o tasa mínima.
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Valor futuro (VF)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  Hace a la referencia de la cantidad de dinero que podrá
                  alcanzar una inversión en una fecha futura al ganar intereses
                  a una tasa compuesta.
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Pago o renta (P)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  Es el pago, depósito o retiro, que se hace periódicamente.
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Tasa de interés (i)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  es la cantidad que se abona en una unidad de tiempo por cada
                  unidad de capital invertido
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Numero de periodo (n)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  Es el tiempo que transcurre entre un pago y otro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineAnualidades;
