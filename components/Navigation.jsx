import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import lvLogo from '../public/upload/lv_logo.png';

export const Navigation = ({ isAboutOpen, setIsAboutOpen, isMenuOpen, setIsMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`ease fixed left-0 top-[15px] z-[999] w-full transition-opacity duration-[0.7s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-12 gap-y-[10px] px-[20px] text-[14px] md:px-[80px] md:text-[16px] lg:px-[80px]">
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
        <div className="col-span-12 lg:col-span-4 lg:flex lg:justify-center lg:items-center">
          <Image
            src={lvLogo.src}
            alt='La Viet Logo'
            width={123}
            height={46}
            className='ease transition-all duration-[0.4s] betterhover:hover:opacity-50 opacity-100'
          /> 
        </div>
        <div className="col-span-12 lg:col-span-4 lg:flex lg:justify-end">
          <a href="#" rel="noreferrer noopener" target="_blank" className="opacity-100 ease mb-[10px] block w-fit transition-all duration-[0.4s] lg:mb-[0px] lg:mr-[60px] betterhover:hover:opacity-50">Order Online</a>
          <a href="#" rel="noreferrer noopener" target="_blank" className="opacity-100 ease block w-fit transition-all duration-[0.4s] betterhover:hover:opacity-50">Book Online</a>
        </div>
      </div>
    </div>
  );
};
