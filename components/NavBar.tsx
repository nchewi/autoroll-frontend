"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';

const navLinks = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "SERVICES",
    path: "#services",
  },
  {
    title:"BLOG",
    path:'/blog',
  },
  {
    title: "CONTACT",
    path: "#contact",
  }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex flex-wrap items-center justify-between border border-b-[#33353F] max-container padding-container z-30 py-5 ${isScrolled ? 'bg-[#ffffff] bg-opacity-80' : 'bg-[#ffffff]'}`}>
      <Link href={"/"}>
        <Image 
          src="/autoroll-logo.png" 
          alt="logo" 
          width={76} 
          height={33} />
      </Link>

      <div className="flex items-center">
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <Image
              className="cursor-pointer"
              src="/close.png"
              alt="Close Icon"
              width={34}
              height={34}
            />
          ) : (
            <Image
              className="cursor-pointer"
              src="/menu.png"
              alt="Menu Icon"
              width={34}
              height={34}
            />
          )}
        </button>

        {isOpen && (
          <ul className="lg:hidden flex flex-col items-center gap-4 absolute top-full left-0 w-full bg-[#ffffff] bg-opacity-95 py-4 px-2 rounded shadow-md">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} setIsOpen={setIsOpen}/>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden lg:flex flex-wrap justify-end gap-12">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} setIsOpen={setIsOpen}/>
          </li>
        ))}
      </div>
    </nav>     
  );
};

export default NavBar;
