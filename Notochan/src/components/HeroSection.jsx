
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to NotoChan!</h1>
      <p className="text-lg mb-6">Your cute note buddy to keep all your thoughts organized.</p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
