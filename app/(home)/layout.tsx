import React from "react";
import HomeTopNav from "./_components/home-top-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-muted content-height overflow-y-auto">
      <HomeTopNav />
      {children}
    </main>
  );
};

export default Layout;
