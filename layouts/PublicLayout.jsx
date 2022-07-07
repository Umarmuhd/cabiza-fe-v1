import React from "react";
import { Toaster } from "react-hot-toast";
import { MainNavigation } from '@/components/Navbars/MainNav';
import { MainFooter } from '@/components/Footer/MainFooter';

const PublicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Toaster />
      <main className="relative">
        <div className="w-full h-full">
          {/* <MainNavigation /> */}
          {children}
          {/* <MainFooter /> */}
        </div>
      </main>
    </React.Fragment>
  );
};

export default PublicLayout;
