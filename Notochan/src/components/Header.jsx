import React from "react";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-4 px-8 bg-gray-50 w-full"
      style={{
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)", 
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
     
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-[#4B0082]">NotoChan 📝</span>
        <span className="text-sm text-gray-500 hidden sm:inline">
          your cute note buddy
        </span>
      </div>
      <nav className="hidden md:flex space-x-14 text-[#4B0082] font-medium">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">About</a>
      </nav>
      
      <button className="px-5 py-2 bg-[#4B0082] text-white rounded-md hover:bg-[#5f20b5] transition">
        Login 
      </button>
    </header>
  );
};

export default Header;
