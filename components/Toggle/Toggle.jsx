import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const ToggleSwitch = ({ label }) => {
  const [enabled, setEnabled] = useState(false)
  return (    
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={
        (enabled ? "bg-primary_brand_base" : "bg-secondary_sky_light") +
        " relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      }
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-4" : "translate-x-0"}
pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  );
};

export default ToggleSwitch;
