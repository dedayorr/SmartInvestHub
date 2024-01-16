/* eslint-disable no-unused-vars */
import React from "react";
import LandingPage from "../../pages/LandingPage";
import Router from "../../Router";
import Footer from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default Layout;
