import React from "react";

const TimeLine = () => {
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
                  Interés simple
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  El interés simple es el tipo de interés que se calcula
                  teniendo únicamente en cuenta el capital inicial. Es decir, la
                  cantidad de intereses obtenida en cada período es siempre la
                  misma.
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Interés compuesto
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  El interés compuesto es el tipo de interés que tiene en cuenta
                  el capital inicial y los intereses acumulados para calcular
                  los intereses del siguiente período.
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Capital (C)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  El capital puede ser una suma de dinero invertida con la
                  intención de aumentarla, un patrimonio de bienes y valores, o
                  un conjunto de medios de producción. En todos los casos, el
                  capital tiene como función producir un excedente: el interés.
                  También se le conoce como valor presente o valor actual del
                  dinero.
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
                  Es el porcentaje al que está invertido un capital en una
                  unidad de tiempo, determinando lo que se refiere como "el
                  precio del dinero en el mercado financiero". En general, la
                  tasa de interés expresada en porcentajes representa el costo
                  de oportunidad de la utilización de una suma determinada de
                  dinero. En este sentido, la tasa de interés es el precio del
                  dinero, el cual se debe pagar o cobrar por tomarlo prestado o
                  cederlo en préstamo
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
                  Es el tiempo o período de la inversión o crédito (expresado en
                  años, meses,bimestres,...)
                </p>
              </div>
            </div>
            <div className="timeline-block mb-3 position-relative">
              <span className="timeline-step">
                <i className="fa fa-hand-holding-usd "></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-primary text-sm font-weight-bold mb-0">
                  Interés(I)
                </h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                  Interés, en economía y finanzas, es un índice utilizado para
                  medir la rentabilidad de los ahorros e inversiones, así como
                  el costo de un crédito. Un ejemplo sería el crédito bancario
                  para la compra de una vivienda. Se expresa como un porcentaje
                  referido al total de la inversión o crédito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
