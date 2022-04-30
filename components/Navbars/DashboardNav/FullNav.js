import React from "react";
import TopNav from "@/components/Navbars/DashboardNav/TopNav";

const FullNav = ({ title, children }) => {
  return (
    <React.Fragment>
      <TopNav title={title} showLanguage={false} />
      <div
        className="bg-secondary_sky_lightest py-4 h-20"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)" }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default FullNav;
