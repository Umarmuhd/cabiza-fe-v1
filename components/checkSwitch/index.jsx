import React from "react";
import style from "./index.module.css";

export default function CheckSwitch({ label, styles, checked, name }) {
  return (
    <label className={`${style.input} ${styles}`} htmlFor={label}>
      <input
        type="radio"
        name={name}
        id={label}
        className="hidden"
        checked={checked}
      />
      <div className={style.newRadio}></div>
      <label htmlFor={label}>{label}</label>
    </label>
  );
}
