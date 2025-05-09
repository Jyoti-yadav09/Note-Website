
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturePreview from "../components/FeaturePreview";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturePreview />
      <Footer/>
    </div>
  );
};

export default HomePage;
