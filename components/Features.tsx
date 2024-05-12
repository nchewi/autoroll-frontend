import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <section className='flex flex-col items-center overflow-hidden py-10' id='services'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center text-[#03021e]'>Our Services</h2>
      <div className='max-container padding-container relative w-full flex flex-col lg:flex-row'>
        <div className='flex-1'>
          <ul className='mt-5 grid gap-10 md:grid-cols-2 lg:mt-10 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
        <div className='relative lg:flex-1 lg:min-h-[900px] flex justify-center lg:justify-end'>
          <Image
            src="/services.jpg"
            alt="services"
            width={440}
            height={1000}
            className='lg:absolute top-[20%] right-0 z-10 hidden lg:block max-w-[1500px]'
          />
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className='flex w-full flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7'>
        <Image
          src={icon}
          alt="icon"
          width={50} 
          height={50} 
        />
      </div>
      <h2 className='text-2xl lg:text-2xl font-bold text-[#03021E] mt-2 capitalize'>
        {title}
      </h2>
      <p className='text-base mt-2 bg-white/80 text-[#03021E] lg:mt-4 lg:bg-transparent'>
        {description}
      </p>
    </li>
  );
};

export default Features;
