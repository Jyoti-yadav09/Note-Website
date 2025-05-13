import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderLoggedIn = ({ onLogout }) => {
  const navigate = useNavigate();

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
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
        <span className="text-2xl font-bold text-[#4B0082]">NotoChan 📝</span>
        <span className="text-sm text-gray-500 hidden sm:inline">
          your cute note buddy
        </span>
      </div>

      <nav className="hidden md:flex space-x-10 text-[#4B0082] font-medium">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/create" className="hover:underline">Create</Link>
        <Link to="/my-notes" className="hover:underline">My Notes</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
      </nav>

      <button
        onClick={onLogout}
        className="px-5 py-2 bg-[#4B0082] text-white rounded-md hover:bg-[#5f20b5] transition"
      >
        Logout
      </button>
    </header>
  );
};

export default HeaderLoggedIn;
