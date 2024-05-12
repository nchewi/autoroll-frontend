import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative max-container padding-container flex flex-col md:flex-row items-center justify-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:justify-start" id='home'
      style={{ backgroundImage: "url('/hero-image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold pt-10">Welcome to Autoroll!</h1>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white pt-4">Your one stop for automobile services and tips</h2>
        <div className="mt-6 flex flex-wrap justify-center md:justify-start pt-8">
          <button className="bg-[#9E1D20] hover:bg-[#be171a] text-white font-bold py-2 px-4 rounded mr-4">Our Services</button>
          <button className="bg-[#9E1D20] hover:bg-[#be171a] text-white font-bold py-2 px-4 rounded">Our Blog</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
