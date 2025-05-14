import React from 'react';
import {Link} from "react-router-dom";


const Sidebar = () => {
  return (
    <aside>
        <h2>NotoChan 📝</h2>
        <nav>
            <Link to="/dashboard">
            <FaStickyNote/> Dashboard
            </Link>

             <Link to="/create">
              <FaPlus/> Create
             </Link>

             <Link to="/my-notes">
               <FaClipboardList/> My Notes
             </Link>

            <Link to="/remainder">
             <FaClock/> Remainders
            </Link>

            <Link to="/archive">
             <FaArchive/>Archive
            </Link>

             <Link to="/bin">
             <FaTrashAlt/>Bin
             </Link>

             <Link to="/profile">
              <FaUser/> Profile
             </Link>
        </nav>

      
    </aside>
  )
}

export default Sidebar
