import React from "react";
import AuthFooter from "../components/Footer/AuthFooter";

import AuthNavbar from "../components/Navbars/AuthNavbar/index";

export default function Auth({ children }) {
  return (
    <>
      <div className="bg-grey_98 min-h-screen h-full">
        <AuthNavbar />
        <main className="h-full min-h-screen">{children}</main>
        <AuthFooter />
      </div>
    </>
  );
}
