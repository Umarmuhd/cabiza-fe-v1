import React from "react";
import { useState, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import AuthNavbar from "../components/Navbars/AuthNavbar/index";
import AuthFooter from "../components/Footer/AuthFooter";

import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function Auth({ children }) {
  const { user } = useContext(AuthContext);

  const router = useRouter();
  if (typeof window !== "undefined" && user) {
    router.replace(user?.username ? "/profile" : "/onboarding");
  }

  return (
    <div className="bg-secondary_sky_lighter min-h-screen h-full">
      <Toaster />
      <AuthNavbar />
      <main className="h-full min-h-screen">{children}</main>
      {/* <AuthFooter /> */}
    </div>
  );
}
