/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/PopUps/SignIn";
import SignUp from "./components/PopUps/SignUp";
import LandingPage from "./pages/LandingPage";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
