import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import {FaStickyNote, FaPlus, FaUser, FaClipboardList, FaArchive, FaTrashAlt, FaClock, FaBars} from "react-icons/fa";

const Sidebar = () => {

  const[isSidebarCollapsed, setSidebarCollapsed]=useState(false);

  const toggleSidebar=()=>
  {
     setSidebarCollapsed(!isSidebarCollapsed);
  }

  return (
    <aside className='w-64 bg-gray-500 space-y-6 min-h-screen'>
      <div className="flex gap-6 items-center">   
        <h2 className={`text-2xl font-semibold text-[#FCD34D] mb-4 `}>NotoChan 📝</h2>

        {/*Hamburger Icon */}
        <div onClick={toggleSidebar} className='cursor-pointer text-2xl text-white'>
          <FaBars/>
        </div>
          </div>

        <nav className='space-y-3 text-gray-300 font-medium ml-5'>
            <Link to="/dashboard" className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ?' mb-4' : ''}`}>
            <FaStickyNote/> {!isSidebarCollapsed && "Dashboard"}
            </Link>

             <Link to="/create" className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ? 'mb-4' : ''}`}>
              <FaPlus/> {!isSidebarCollapsed && "Create"}
             </Link>

             <Link to="/my-notes" className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ? 'mb-4' : ''}`}>
               <FaClipboardList/> {!isSidebarCollapsed && "My Notes"}
             </Link>

            <Link to="/remainder"className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ? 'mb-4' : ''}`}>
             <FaClock/> {!isSidebarCollapsed && "Remainders"}
            </Link>

            <Link to="/archive" className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ? 'mb-4' : ''}`}>
             <FaArchive/> {!isSidebarCollapsed && "Archive"}
            </Link>

             <Link to="/bin" className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ? 'mb-4' : ''}`}>
             <FaTrashAlt/> {!isSidebarCollapsed && "Bin"}
             </Link>

             <Link to="/profile" className={`flex items-center gap-2 px-4 py-2 hover:text-white ${isSidebarCollapsed ? 'mb-4' : ''}`}>
              <FaUser/> {!isSidebarCollapsed && "Profile"}
             </Link>
        </nav>

      
    </aside>
  )
}

export default Sidebar
