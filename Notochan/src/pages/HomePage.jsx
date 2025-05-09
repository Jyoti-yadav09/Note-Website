// src/pages/HomePage.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturePreview from "./components/FeaturePreview";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturePreview />
    </div>
  );
};

export default HomePage;
