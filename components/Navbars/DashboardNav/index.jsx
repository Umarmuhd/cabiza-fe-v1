import UserMenu from "@/components/Dropdowns/UserMenu";
import Notifications from "@/components/Notifications";
import React, { useState } from "react";

export default function DashboardNav({ sidebarOpen, setSidebarOpen, title }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className=" px-4 sm:px-0 lg:px-0 ">
        {/* <div className=" px-4 sm:px-6 lg:px-8 "> */}
        <div className="md:w-43/50 flex items-center justify-between h-16 -mb-px mx-auto">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <span className="hidden md:flex font-medium text-3xl text-secondary_ink_dark">
              {title}
            </span>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            {/* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> */}
            <Notifications />
            {/* <Help /> */}
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
