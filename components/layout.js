import React from 'react';
import dynamic from "next/dynamic";

const Header = dynamic(import("../components/Header"));
const Footer = dynamic(import("../components/Footer"));


const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
