import React from "react";
import AuthNavbar from "../components/Navbars/AuthNavbar/index";
import AuthFooter from "../components/Footer/AuthFooter";

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
