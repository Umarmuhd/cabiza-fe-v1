import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import Sidebar from "../components/Sidebar/index";

import { Toaster } from "react-hot-toast";
import AuthContext from "@/context/AuthContext";

export default function Dashboard({ children }) {
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  if (typeof window !== "undefined") {
    if (!user) router.push("/auth/login");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar user={user} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
