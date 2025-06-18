import React, { useState } from "react";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import ChatIcon from "../ChatIcon/ChatIcon";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <div>
        <Outlet />
      </div>
      <ChatIcon />
      <Footer />
    </>
  );
}
