// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 px-8 bg-white shadow-2xl"
    style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
    <div className="text-2xl font-bold text-[#4B0082] tracking-wide ">NotoChan 📝</div>
    <div className="space-x-4">
      <button className="px-5 py-2 bg-[#ADD8E6] text-[#4B0082] rounded-lg hover:bg-blue-200 transition">
        Login
      </button>
      <button className="px-5 py-2 bg-[#C1E1C1] text-[#4B0082] rounded-lg hover:bg-green-200 transition">
        Sign Up
      </button>
    </div>
  </header>
  
  );
};


export default Header;
