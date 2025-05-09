// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-pink-300">
      <div className="text-xl font-bold">NotoChan</div>
      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2">
          Login
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
