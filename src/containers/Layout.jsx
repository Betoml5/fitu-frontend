import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="flex ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
