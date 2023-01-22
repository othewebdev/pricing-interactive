import React from "react";
import "./styles.css";

const Toggle = ({ id, checked, onChange, optionLabels }) => {
  return (
    <div className="ToggleContainer">
      <label>Monthly Billing</label>
      <div className="toggle-switch small-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className="toggle-switch-inner"
            data-yes={optionLabels[0]}
            data-no={optionLabels[0]}
            tabIndex={-1}
          />
          <span className="toggle-switch-switch" tabIndex={-1} />
        </label>
      </div>
      <label>Yearly Billing</label>
      <small className="discount">25% yearly</small>
    </div>
  );
};

export default Toggle;
