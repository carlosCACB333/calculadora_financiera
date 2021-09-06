import React from "react";

const Select = ({ attr, label, error, onChange, help, options = [] }) => {
  return (
    <>
      <label className="form-label">{label || attr.name}</label>
      <select
        {...attr}
        className={error ? " form-control is-invalid" : "form-control"}
        onChange={onChange}
      >
        <option value="">Seleccione...</option>
        {options.map((op) => (
          <option value={op.id} key={op.id}>
            {op.value}
          </option>
        ))}
      </select>
      <div className={error ? "invalid-feedback" : "form-text"}>
        {error || help}
      </div>
    </>
  );
};

export default Select;
