import React, { useContext } from "react";
import { useRouter } from "next/router";

import Sidebar from "../components/Sidebar";

import { Toaster } from "react-hot-toast";
import AuthContext from "@/context/AuthContext";

export default function Dashboard({ children }) {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  if (typeof window !== "undefined") {
    if (!user) router.push("/auth/login");
  }

  return (
    <div className="md:static">
      <Sidebar user={user} />
      <div className="main_content relative min-h-screen bg-secondary_sky_lighter">
        <div className="px-0 md:px-0 mx-auto w-full -m-24 content-wrap">
          {children}
        </div>

        <style jsx>{`
          @media screen and (min-width: 768px) {
            .main_content {
              margin-left: 256px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
