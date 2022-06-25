import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import Sidebar from "../components/Sidebar/index";

import { Toaster } from "react-hot-toast";
import { NavContext, NavProvider } from "@/context/NavContext";
import AuthContext from "@/context/AuthContext";

export default function Dashboard({ children }) {
  const { showNav, setShowNav } = useContext(NavContext);
  const { user } = useContext(AuthContext);

  const router = useRouter();

  if (typeof window !== "undefined" && !user) router.push("/auth/login");

  return (
    <div className="flex min-h-screen h-full">
      {/* Sidebar */}
      <Sidebar user={user} sidebarOpen={showNav} setSidebarOpen={setShowNav} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden bg-secondary_sky_lighter w-[50%] ml-auto h-[inherit]">
        {children}
      </div>
    </div>
  );
}
