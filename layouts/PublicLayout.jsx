import React from "react";
import { Toaster } from "react-hot-toast";

const PublicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Toaster />
      <main className="relative">{children}</main>
    </React.Fragment>
  );
};

export default PublicLayout;
