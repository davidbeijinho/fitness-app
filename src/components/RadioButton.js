import React from "react";

const RadioButton = ({ name, value, label, onChange, checked }) => (
  <div className="field">
    <div className="control">
      <input type="radio" name={name} value={value} id={`${name}-${value}`} checked={checked} onChange={onChange} />
      <label className="radio" htmlFor={`${name}-${value}`} >{label}</label>
    </div>
  </div>
);

export default RadioButton;