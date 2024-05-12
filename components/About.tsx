import React from 'react';

const About = () => {
  return (
    <section className="padding-container max-container bg-[#9e1d20] py-10" id='about'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center text-[#03021e]'>About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <div>
          <p className="text-lg text-white">
            We are a team dedicated to providing top-notch automobile services and tips.
            With years of experience in the automotive industry, we understand the importance
            of quality service and customer satisfaction.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#03021e]">Our Mission</h2>
            <p className='text-white'>
              Our mission is to ensure every vehicle owner has access to professional,
              reliable, and affordable automobile services. We aim to be your go-to
              resource for all automotive needs.
            </p>
          </div>
          <div className='mb-5'>
            <h2 className="text-2xl font-semibold mb-2 text-[#03021e]">Our Vision</h2>
            <p className='text-white'>
              Our vision is to lead the auto service industry through innovation and service
              excellence, continuously improving the way vehicles are maintained and serviced.
              We strive to set new standards in customer care and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
