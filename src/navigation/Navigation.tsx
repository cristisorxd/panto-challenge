import React from "react";
import { Routes, Route } from "react-router-dom";
import BlankPage from "../screens/BlankPage/BlankPage";
import LandingPage from "../screens/LandingPage/LandingPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/empty" element={<BlankPage />} />
    </Routes>
  );
};

export default Navigation;
