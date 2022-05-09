import React from "react";
import { Routes, Route } from "react-router-dom";

import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import AllProducts from "../screens/AllProducts/AllProducts";
import BlankPage from "../screens/BlankPage/BlankPage";
import LandingPage from "../screens/LandingPage/LandingPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/empty" element={<BlankPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/view-all-products" element={<AllProducts />} />
    </Routes>
  );
};

export default Navigation;
