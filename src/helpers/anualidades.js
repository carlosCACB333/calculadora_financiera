export const anualidades = (anualidad, tipo, variable, form, setForm) => {
  let pago = parseFloat(form.pago);
  let tasa = parseFloat(form.tasa) / 100;
  let periodo = parseFloat(form.periodo);
  let va = parseFloat(form.va);
  let vf = parseFloat(form.vf);
  console.log({ pago, tasa, periodo, va, vf });
  if (anualidad === "vencida") {
    if (tipo === "va") {
      switch (variable) {
        case "va": {
          let resp = (pago * (1 - Math.pow(1 + tasa, -periodo))) / tasa;
          setForm({ ...form, va: resp + "" });
          return resp;
        }
        case "pago": {
          let resp = (tasa * va) / (1 - Math.pow(1 + tasa, -periodo));
          setForm({ ...form, pago: resp + "" });
          return resp;
        }
        case "tasa": {
          let h = Math.pow((pago * periodo) / va, 2 / (periodo + 1)) - 1;
          let resp =
            100 * h * ((h * (periodo - 1) - 12) / (2 * h * (periodo - 1) - 12));
          setForm({ ...form, tasa: resp + "" });
          return resp + " %";
        }
        case "periodo": {
          let resp = -(
            Math.log10(1 - (va * tasa) / pago) / Math.log10(1 + tasa)
          );
          setForm({ ...form, periodo: resp + "" });
          return resp;
        }
        default:
          return 0;
      }
    } else if (tipo === "vf") {
      switch (variable) {
        case "vf":
          let resp = (pago * (Math.pow(1 + tasa, periodo) - 1)) / tasa;
          setForm({ ...form, vf: resp + "" });
          return resp;
        case "pago": {
          let resp = (vf * tasa) / (Math.pow(1 + tasa, periodo) - 1);
          setForm({ ...form, pago: resp + "" });
          return resp;
        }
        case "tasa": {
          let h = Math.pow(vf / (pago * periodo), 2 / (periodo - 1)) - 1;
          let resp =
            100 * h * ((h * (periodo + 1) + 12) / (2 * h * (periodo + 1) + 12));
          setForm({ ...form, tasa: resp + "" });
          return resp + "%";
        }
        case "periodo": {
          let resp = Math.log10((vf * tasa) / pago + 1) / Math.log10(1 + tasa);
          setForm({ ...form, periodo: resp + "" });
          return resp;
        }

        default:
          return 0;
      }
    }
  } else if (anualidad === "anticipada") {
    if (tipo === "va") {
      switch (variable) {
        case "va": {
          let resp = pago * (1 + (1 - Math.pow(1 + tasa, -periodo + 1)) / tasa);
          setForm({ ...form, va: resp + "" });
          return resp;
        }
        case "pago": {
          let resp = va / ((1 - Math.pow(1 + tasa, -periodo + 1)) / tasa + 1);
          setForm({ ...form, pago: resp + "" });
          return resp;
        }
        case "tasa": {
          let h =
            Math.pow((pago * (periodo - 1)) / (va - pago), 2 / periodo) - 1;
          let resp =
            100 * h * ((h * (periodo - 2) - 12) / (2 * h * (periodo - 2) - 12));
          setForm({ ...form, tasa: resp + "" });
          return resp + " %";
        }
        case "periodo": {
          let resp =
            1 -
            Math.log10(1 + tasa - (va * tasa) / pago) / Math.log10(1 + tasa);
          setForm({ ...form, periodo: resp + "" });
          return resp;
        }
        default:
          return 0;
      }
    } else if (tipo === "vf") {
      switch (variable) {
        case "vf":
          let resp = pago * ((Math.pow(1 + tasa, periodo + 1) - 1) / tasa - 1);
          setForm({ ...form, vf: resp + "" });
          return resp;
        case "pago": {
          let resp = (vf * tasa) / (Math.pow(1 + tasa, periodo) - 1);
          setForm({ ...form, pago: resp + "" });
          return resp;
        }
        case "tasa": {
          let h =
            Math.pow((vf + pago) / (pago * (periodo + 1)), 2 / periodo) - 1;
          let resp =
            100 * h * ((h * (periodo + 2) + 12) / (2 * h * (periodo + 2) + 12));
          setForm({ ...form, tasa: resp + "" });
          return resp + " %";
        }
        case "periodo": {
          let resp =
            Math.log10((vf * tasa) / pago + tasa + 1) / Math.log10(1 + tasa) -
            1;
          setForm({ ...form, periodo: resp + "" });
          return resp;
        }

        default:
          return 0;
      }
    }
  }
};
