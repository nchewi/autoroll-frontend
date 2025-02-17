import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically
  
  return (
    <footer className='flexCenter mb-24 bg-[#03021e] py-10'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image
              src='/autoroll-logo-red.png'
              alt='logo'
              width={74}
              height={29}
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'> 
                  {columns.links.map((link) => (
                    <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p className='whitespace-nowrap text-gray-30'>
                      {link.label}:
                    </p>
                    <p className='medium-14 whitespace-nowrap text-[#9e1d20]'>
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'> 
                  {SOCIALS.links.map((link) => (
                    <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
                      <Image src={link.icon} alt={link.name} width={24} height={24}/>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20'/>
        <p className='regular-14 w-full text-center text-gray-30'>{currentYear} Autoroll | All rights reserved</p> 
      </div>  
    </footer>
  )
}

type FooterColumnProps ={
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap text-white'>{title}</h4> 
      {children}
    </div>
  )
}
export default Footer
