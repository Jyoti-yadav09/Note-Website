

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  FaStickyNote,
  FaPlus,
  FaUser,
  FaClipboardList,
  FaArchive,
  FaTrashAlt,
  FaClock,
  FaBars
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-500 min-h-screen p-4 space-y-6 transition-all duration-300`}
    >
      {/* Header with logo and hamburger */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#FCD34D]">
          {isCollapsed ? 'N' : 'NotoChan 📝'}
        </h2>
        <button onClick={toggleSidebar} className="text-white text-xl">
          <FaBars />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4 text-gray-300 font-medium">
        <SidebarLink to="/dashboard" icon={<FaStickyNote />} label="Dashboard" collapsed={isCollapsed} />
        <SidebarLink to="/create" icon={<FaPlus />} label="Create" collapsed={isCollapsed} />
        <SidebarLink to="/my-notes" icon={<FaClipboardList />} label="My Notes" collapsed={isCollapsed} />
        <SidebarLink to="/remainder" icon={<FaClock />} label="Remainders" collapsed={isCollapsed} />
        <SidebarLink to="/archive" icon={<FaArchive />} label="Archive" collapsed={isCollapsed} />
        <SidebarLink to="/bin" icon={<FaTrashAlt />} label="Bin" collapsed={isCollapsed} />
        <SidebarLink to="/profile" icon={<FaUser />} label="Profile" collapsed={isCollapsed} />
      </nav>
    </aside>
  );
};

// Reusable SidebarLink component
const SidebarLink = ({ to, icon, label, collapsed }) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-3 py-2 hover:text-white ${
      collapsed ? 'justify-center' : ''
    }`}
  >
    {icon}
    {!collapsed && <span>{label}</span>}
  </Link>
);

export default Sidebar;
