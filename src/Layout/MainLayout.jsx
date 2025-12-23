import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}
