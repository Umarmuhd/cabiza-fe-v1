import React from "react";
import { useState, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import AuthNavbar from "../components/Navbars/AuthNavbar/index";
import AuthFooter from "../components/Footer/AuthFooter";

import AuthContext from "@/context/AuthContext";

export default function Auth({ children }) {
  const { user } = useContext(AuthContext);

  const router = useRouter();
  if (typeof window !== "undefined" && user) {
    router.replace("/dashboard/products");
  }

  return (
    <>
      <div className="bg-grey_98 min-h-screen h-full">
        <AuthNavbar />
        <main className="h-full min-h-screen">{children}</main>
        {/* <AuthFooter /> */}
      </div>
    </>
  );
}
