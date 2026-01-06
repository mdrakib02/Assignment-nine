import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
     <div className="min-h-screen">
      <Outlet />
     </div>
      <Footer/>
    </div>
  );
}
