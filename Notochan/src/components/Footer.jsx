import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center py-6 border-t">
        <p className="text-[#4B0082] font-medium">
          © {new Date().getFullYear()} NotoChan. All rights reserved.
        </p>
        <p className="text-sm text-[#4B0082]">Notes that make you smile ✨</p>
      </footer>
      
    );
  };

export default Footer;