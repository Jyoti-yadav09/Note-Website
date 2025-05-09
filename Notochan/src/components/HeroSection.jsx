import React from "react";


const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-[#4B0082] ml-6 mb-6 leading-tight">
          Welcome to <span className="text-[#FF69B4]">NotoChan!</span>
        </h1>
        <p className="text-lg text-[#555] mb-6">
          Cute, minimal & lightning fast — your personal note-sharing space.  
        </p>
        <button className="px-6 py-3 bg-[#ADD8E6] text-[#333] rounded-lg hover:bg-blue-200 transition shadow-md">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="/assets/Cuteimage.jpg" alt="Cute notes illustration" className="w-100 h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
