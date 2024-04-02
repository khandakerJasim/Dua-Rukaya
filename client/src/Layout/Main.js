import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../pages/Share/Navbar";
import Footer from "./../pages/Share/Footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
