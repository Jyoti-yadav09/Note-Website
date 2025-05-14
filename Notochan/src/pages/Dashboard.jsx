import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaStickyNote, FaPlus, FaUser, FaClipboardList, FaArchive, FaTrashAlt, FaClock, FaBars } from "react-icons/fa";

const Dashboard = () => {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-white">
     
      <aside className={`w-64 bg-gray-500 p-6 space-y-6 transition-all duration-300 ${isSidebarOpen ? '' : 'w-20'}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#FCD34D] mb-4">NotoChan 📝</h2>
         
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        
        
        <nav className="space-y-4 text-gray-300 font-medium">
          <Link to="/dashboard" className="flex items-center gap-2 hover:text-white">
            <FaStickyNote /> {isSidebarOpen && "Dashboard"}
          </Link>
          <Link to="/create" className="flex items-center gap-2 hover:text-white">
            <FaPlus /> {isSidebarOpen && "Create"}
          </Link>
          <Link to="/my-notes" className="flex items-center gap-2 hover:text-white">
            <FaClipboardList /> {isSidebarOpen && "My Notes"}
          </Link>
          <Link to="/reminders" className="flex items-center gap-2 hover:text-white">
            <FaClock /> {isSidebarOpen && "Remainders"}
          </Link>
          <Link to="/archive" className="flex items-center gap-2 hover:text-white">
            <FaArchive /> {isSidebarOpen && "Archive"}
          </Link>
          <Link to="/bin" className="flex items-center gap-2 hover:text-white">
            <FaTrashAlt /> {isSidebarOpen && "Bin"}
          </Link>
          <Link to="/profile" className="flex items-center gap-2 hover:text-white">
            <FaUser /> {isSidebarOpen && "Profile"}
          </Link>
        </nav>
      </aside>

      
      <main className="flex-1 p-6">
        
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-6 shadow-md">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search notes..."
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
        </div>

      
        <div className="text-gray-400 text-center mt-20">
          <p className="text-lg">📝 Notes that you add will appear here</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
