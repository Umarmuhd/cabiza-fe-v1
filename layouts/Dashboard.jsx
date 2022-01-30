import React, { useContext } from "react";
import { useRouter } from "next/router";

import Sidebar from "../components/Sidebar";

//component
// import { Toaster } from "react-hot-toast";
// import AuthContext from "@/context/AuthContext";

export default function Dashboard({ children }) {
  //   const { user } = useContext(AuthContext);

  //   //router
  //   const router = useRouter();

  //   if (typeof window !== "undefined") {
  //     if (!user) {
  //       router.push("/auth/login");
  //     }
  //   }

  return (
    <>
      <div className="md:static">
        <Sidebar />
        <div className="relative md:ml-64 main-content">
          <div className="px-0 md:px-0 mx-auto w-full -m-24 content-wrap">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
