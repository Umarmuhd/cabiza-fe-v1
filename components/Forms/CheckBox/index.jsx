import React from "react";

function CheckboxGroup({
  className = "",
  label = "",
  name = "",
  defaultChecked = false,
  ...newProps
}) {
  const finalClass = `${className} appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary`;
  return (
    <div className="w-full flex items-center justify-between">
      <label className="text-secondary leading-4" htmlFor={name}>
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className={finalClass}
        {...newProps}
      />
    </div>
  );
}

export default CheckboxGroup;
