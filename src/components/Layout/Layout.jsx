/* eslint-disable no-unused-vars */
import React from "react";
import LandingPage from "../../pages/LandingPage";
import Router from "../../Router";
import Footer from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
import ScrollToTop from "react-scroll-to-top";

function Layout() {
  return (
    <div>
      <NavBar />
      <Router />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Layout;
