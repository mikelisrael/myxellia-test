import React from "react";
import HomeTopNav from "./_components/home-top-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeTopNav />
      {children}
    </>
  );
};

export default Layout;
