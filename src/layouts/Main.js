import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div className="max-w-5xl m-auto p-4 md:p-16 bg-gray-200">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
