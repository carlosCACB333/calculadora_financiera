export const ratios = (form) => {
  let {
    activos_corr,
    activos_nocorr,
    pastivo_corr,
    pastivo_nocorr,
    efectivo,
    inventario,
    costo_ventas,
    ganancia_neta,
    venta_neta,
    patrimonio,
  } = form;

  let liquidezGen = parseFloat(activos_corr) / parseFloat(pastivo_corr);
  let acida =
    (parseFloat(activos_corr) - parseFloat(inventario)) /
    parseFloat(pastivo_corr);
  let rotacion = parseFloat(costo_ventas) / parseFloat(inventario);

  let solvencia =
    (parseFloat(pastivo_corr) + parseFloat(pastivo_nocorr)) /
    (parseFloat(activos_corr) + parseFloat(activos_nocorr));

  let liquidezAbs = parseFloat(efectivo) / parseFloat(pastivo_corr);
  let trabajo = parseFloat(activos_corr) - parseFloat(pastivo_corr);
  let inmobInven = (parseFloat(inventario) * 360) / parseFloat(costo_ventas);
  let rentabilidad = parseFloat(ganancia_neta) / parseFloat(venta_neta);
  let rentabilidadAct =
    parseFloat(ganancia_neta) /
    (parseFloat(activos_corr) + parseFloat(activos_nocorr));

  let rentaPatri = parseFloat(ganancia_neta) / parseFloat(patrimonio);
  let solvenviaPatri =
    (parseFloat(pastivo_corr) + parseFloat(pastivo_nocorr)) /
    parseFloat(patrimonio);

  let rotacionActiv =
    parseFloat(venta_neta) /
    (parseFloat(activos_corr) + parseFloat(activos_nocorr));

  let rentaCap = parseFloat(ganancia_neta) / parseFloat(patrimonio);
  return [
    { detalle: "Razon de liquidez general", valor: liquidezGen },
    { detalle: "Prueva ácida", valor: acida },
    { detalle: "Rotación de inventarios", valor: rotacion },
    { detalle: "Razon de endeudamiento total (Solvencia)", valor: solvencia },
    { detalle: "Liquidez absoluto", valor: liquidezAbs },
    { detalle: "Capital de trabajo", valor: trabajo },
    {
      detalle: "Plazo promedio de inmobilización de inventario",
      valor: inmobInven,
    },
    { detalle: "Rentabilidad neta sobre ventas", valor: rentabilidad },
    { detalle: "Rentabilidad de activo", valor: rentabilidadAct },
    { detalle: "Rentabilidad patrimonial", valor: rentaPatri },
    { detalle: "Solvencia patrimonial", valor: solvenviaPatri },
    { detalle: "Rotación de activo total", valor: rotacionActiv },
    { detalle: "Rentabilidad sobre los capitales propios", valor: rentaCap },
  ];
};
