import React from "react";

const Input = ({ attr, label, error, onChange, help }) => {
  return (
    <>
      <label className="form-label">{label || attr.name}</label>
      <input
        {...attr}
        className={error ? " form-control is-invalid" : "form-control"}
        onChange={onChange}
      />
      <div className={error ? "invalid-feedback" : "form-text"}>
        {error || help}
      </div>
    </>
  );
};

export default Input;
