export const amortizacion = (form) => {
  let va = parseFloat(form.va);
  let pago = parseFloat(form.pago);
  let tasa = parseFloat(form.tasa) / 100;
  let amortizaciones = [{ amortizacion: 0, interes: 0, abono: 0, soluto: va }];

  let soluto = va;

  while (soluto > 0.1) {
    let anterior = amortizaciones[amortizaciones.length - 1];
    let interes = tasa * anterior.soluto;
    let amortizacion = pago - interes;
    soluto = anterior.soluto - amortizacion;
    amortizaciones.push({ amortizacion, interes, abono: pago, soluto });
  }
  return amortizaciones;
};
