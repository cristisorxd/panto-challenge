import React from "react";
import FirstSection from "../../components/FirstSection/FirstSection";
import Footer from "../../components/Footer/Footer";
import Navigationbar from "../../components/Navbar/Navigationbar";
import WhySection from "../../components/WhySection/WhySection";
import Experiences from "../../components/Experiences/Experiences";

const LandingPage = () => {
  return (
    <div>
      <Navigationbar />
      <FirstSection />
      <WhySection />
      <Experiences />
      <Footer />
    </div>
  );
};

export default LandingPage;
