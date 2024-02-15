import React, { useState } from 'react';

export const Footer = ({ isContactOpen, setIsContactOpen}) => {
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };



  return (
    <div className="ease fixed left-0 bottom-[15px] z-[999] w-full transition-opacity duration-[0.7s] opacity-100">
      <div className="grid grid-cols-12 gap-y-[10px] px-[20px] text-[14px] md:px-[80px] md:text-[16px] lg:px-[80px]">
        <div className="col-span-12 lg:col-span-6">
          A new generation of Vietnamese cuisine.
        </div>

        <div className="col-span-12 lg:col-span-6 lg:flex lg:justify-end">
          <button onClick={toggleContact} className="ease transition-all duration-[0.4s] betterhover:hover:opacity-50 opacity-100">
            {isContactOpen ? 'Close' : 'Contact'}
          </button>
        </div>
      </div>
    </div>
  )
}
