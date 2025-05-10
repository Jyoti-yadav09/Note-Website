import React from 'react';


const HeroSection = () => {
  return (
    <section className='min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100'>
      <div className='md:w-1/2 text-center '>
        <h1 className='text-5xl font-bold text-[#4B0082] mb-10 '>Welcome to <span className='text-[#FF69B4]'>NotoChan!</span></h1>
        <p className='text-lg mb-6  text-[#555]'>Cute, minimal & lighting fast — your personal note-sharing space. </p>
        <button className='px-6 py-3  bg-[#ADD8E6] text-[#333] rounded-lg hover:bg-blue-200 transition shadow-md'>Login</button>
      </div>

      <div className='md:w-1/2 mt-10 flex justify-center'>
        <img src="/assets/Cuteimage.jpg" alt="Cute notes illustration" className='w-100 h-auto'/> 
      </div>
    </section>
  )
}

export default HeroSection;
