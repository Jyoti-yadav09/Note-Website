import React from 'react';


const HeroSection = () => {
  return (
    <section className='min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12'>
      <div className='md:w-1/2 text-center'>
        <h1 className='text-5xl font-bold text-[#4B0082] mb-6 leading-tight'>Welcome to <span>NotoChan!</span></h1>
        <p>Cute, minimal & lighting fast — your personal note-sharing space. </p>
        <button>Get Started</button>
      </div>

      <div>
        <img src="/assets/Cuteimage.jpg" alt="Cute notes illustration" className='w-100 h-auto'/> 
      </div>
    </section>
  )
}

export default HeroSection;
