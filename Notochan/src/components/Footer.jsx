import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-center py-6 border-t shadow-inner shadow-pink-100 mt-16 rounded-t-2xl'>
      <p className='font-medium text-[#4B0082]'>
         © {new Date().getFullYear()} NotoChan. All rights reserved.
      </p>
      <p className='text-sm text-[#4B0082] mt-1'>
        Notes that make you smile ✨.
      </p>
    </footer>
  )
}

export default Footer;
