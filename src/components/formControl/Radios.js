import React from "react";

const Radios = ({
  attr,
  label,
  error,
  onChange,
  help,
  values = [],
  checked,
}) => {
  return (
    <>
      <div>
        <label>{label || "Seleccione"}</label>
        <br />
        {values.map((value) => (
          <span key={value.value}>
            <input
              {...attr}
              type="radio"
              className="btn-check"
              value={value.value}
              id={value.value}
              checked={checked === value.value}
              onChange={onChange}
            />
            <label
              className="btn m-1 btn-outline-success"
              htmlFor={value.value}
            >
              {value.help}
            </label>
          </span>
        ))}
      </div>
      <div className={error ? "invalid-feedback" : "form-text"}>
        {error || help}
      </div>
    </>
  );
};

export default Radios;
