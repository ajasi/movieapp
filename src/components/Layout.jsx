import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header className="z-20" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
