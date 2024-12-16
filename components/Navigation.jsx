import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lvLogo from '../public/upload/lv_logo.png';
import pageContent from '../site/home.yml';

export const Navigation = ({ isAboutOpen, setIsAboutOpen, isMenuOpen, setIsMenuOpen, isContactOpen, setIsContactOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };


  return (
    <div className={`ease fixed left-0 top-[15px] z-[999] w-full transition-opacity duration-[1.5s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-12 gap-y-[10px] px-[20px] text-[14px] md:px-[40px] md:text-[16px] lg:px-[40px]">
        <div className="col-span-12 lg:col-span-2">
          <button onClick={toggleAbout} className="ease transition-all duration-[0.4s] betterhover:hover:opacity-50 opacity-100">
            {isAboutOpen ? 'Close' : 'About'}
          </button>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <button onClick={toggleMenu} className="ease transition-all duration-[0.4s] betterhover:hover:opacity-50 opacity-100">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className="absolute right-[20px] md:right-[40px] lg:right-0 lg:relative col-span-12 lg:col-span-4 lg:flex lg:justify-center lg:items-center">
          <Image
            src={lvLogo.src}
            alt='La Viet Logo'
            width={123}
            height={46}
            className='ease transition-all duration-[0.4s] betterhover:hover:opacity-50 opacity-100'
          /> 
        </div>
        <div className="col-span-12 lg:col-span-2 lg:flex lg:justify-end">
          <a href={pageContent.order_online_link} rel="noreferrer noopener" target="_blank" className="opacity-100 ease mb-[10px] block w-fit transition-all duration-[0.4s] lg:mb-[0px] lg:mr-[60px] betterhover:hover:opacity-50">Order Online</a>
        </div>
        <div className="col-span-12 lg:col-span-2 lg:flex lg:justify-end">
          <a href="#" rel="noreferrer noopener" target="_blank" className="opacity-100 ease block w-fit transition-all duration-[0.4s] betterhover:hover:opacity-50">Book Online</a>
        </div>
        <div className="col-span-12 lg:hidden">
          <button onClick={toggleContact} className="ease transition-all duration-[0.4s] betterhover:hover:opacity-50 opacity-100">
            {isContactOpen ? 'Close' : 'Contact'}
          </button>        
        </div>
      </div>
    </div>
  );
};
