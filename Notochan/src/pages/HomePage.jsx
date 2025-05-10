
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturePreview from "../components/FeaturePreview";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturePreview />
      <AboutSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
