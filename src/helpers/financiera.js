const convertirTiempo = (de, a, cantidad) => {
  a = parseFloat(a);
  de = parseFloat(de);
  cantidad = parseFloat(cantidad);
  return (cantidad * de) / a;
};

const convertirTasa = (de, a, cantidad) => {
  a = parseFloat(a);
  de = parseFloat(de);
  cantidad = parseFloat(cantidad);
  return (cantidad * a) / de;
};

export const interesSimple = (type, values, setForm) => {
  const tiempo = convertirTiempo(
    values.tipo_tiempo,
    values.tipo_interes,
    values.tiempo
  );

  const capital = parseFloat(values.capital);
  const tasa = parseFloat(values.tasa) / 100;
  const interes = parseFloat(values.interes);

  switch (type) {
    case "capital": {
      let respuesta = interes / (tasa * tiempo);
      setForm({ ...values, capital: respuesta.toString() });
      return respuesta;
    }
    case "tiempo": {
      let tasa = convertirTasa(
        values.tipo_interes,
        values.tipo_tiempo,
        values.tasa
      );
      tasa = tasa / 100;

      let respuesta = interes / (capital * tasa);
      setForm({ ...values, tiempo: respuesta.toString() });
      return respuesta;
    }

    case "tasa": {
      let respuesta = (100 * interes) / (capital * tiempo);
      setForm({ ...values, tasa: respuesta.toString() });
      return respuesta;
    }

    case "interes": {
      let respuesta = tasa * capital * tiempo;
      setForm({ ...values, interes: respuesta.toString() });
      return respuesta;
    }
    default:
      return 0;
  }
};
export const interesCompuesto = (type, values, setForm) => {
  const tiempo = convertirTiempo(
    values.tipo_tiempo,
    values.tipo_interes,
    values.tiempo
  );

  const capital = parseFloat(values.capital);
  const tasa = parseFloat(values.tasa) / 100;
  const interes = parseFloat(values.interes);

  switch (type) {
    case "capital": {
      let respuesta = interes / Math.pow(1 + tasa, tiempo);
      setForm({ ...values, capital: respuesta.toString() });
      return respuesta;
    }
    case "tiempo": {
      let tasa = convertirTasa(
        values.tipo_interes,
        values.tipo_tiempo,
        values.tasa
      );
      tasa = tasa / 100;

      let respuesta = Math.log10(interes / capital) / Math.log10(1 + tasa);
      setForm({ ...values, tiempo: respuesta.toString() });
      return respuesta;
    }

    case "tasa": {
      let respuesta = (Math.pow(interes / capital, 1 / tiempo) - 1) * 100;
      setForm({ ...values, tasa: respuesta.toString() });
      return respuesta;
    }

    case "interes": {
      let respuesta = capital * Math.pow(1 + tasa, tiempo);
      setForm({ ...values, interes: respuesta.toString() });
      return respuesta;
    }
    default:
      return 0;
  }
};
