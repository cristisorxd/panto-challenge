import React from "react";

import FirstSection from "../../components/FirstSection/FirstSection";
import Footer from "../../components/Footer/Footer";
import Navigationbar from "../../components/Navbar/Navigationbar";
import WhySection from "../../components/WhySection/WhySection";
import Experiences from "../../components/Experiences/Experiences";
import Testimonials from "../../components/Testimonials/Testimonials";
import Materials from "../../components/Materials/Materials";
import BestSellingProduct from "../../components/BestSellingProduct/BestSellingProduct";

const LandingPage = () => {
  return (
    <div>
      <Navigationbar darkNavbar={false} />
      <FirstSection />
      <WhySection />
      <BestSellingProduct />
      <Experiences />
      <Materials />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
