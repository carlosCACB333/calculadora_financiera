import React from "react";

const Check = ({ attr, label, error, onChange, help }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        {...attr}
        className={error ? "form-check-input is-invalid" : "form-check-input"}
        onChange={onChange}
      />
      <label className="form-check-labe">{label || attr.name}</label>
      <div className={error ? "invalid-feedback" : "form-text"}>
        {error || help}
      </div>
    </div>
  );
};

export default Check;
