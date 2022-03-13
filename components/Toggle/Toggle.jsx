import React from "react";
import styles from "./Toggle.module.css";

const ToggleSwitch = ({ label, click }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles["toggle-switch"]}`}>
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          name={label}
          id={label}
        />
        <label className={`${styles.label}`} htmlFor={label} onClick={click}>
          <span className={`${styles.inner}`} />
          <span className={`${styles.switch}`} />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
