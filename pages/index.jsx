import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import 'swiper/css'; // Assuming you are using Swiper
import pageContent from "../site/home.yml";
import { HomepageSwiper } from '../components/HomepageSwiper';
import { Navigation } from '../components/Navigation';
import { AboutComponent } from '../components/AboutComponent';
import { MenuComponent } from '../components/MenuComponent';
import { ContactComponent } from '../components/ContactComponent';
import { Footer } from '../components/Footer';
import FadingComponent from '../components/FadingComponent';
import splashLogo from '../public/upload/splash-logo.png'

export default function Home() {
  // destructure.
  const { about, address, desktopImages, mobileImages, hours, contact, menu_philosophy, menu, order_online_link, book_online_link } = pageContent;

  // State to hold the viewport height
  const [viewportHeight, setViewportHeight] = useState(0);

  // Function to update the viewport height
  const updateViewportHeight = () => {
    setViewportHeight(window.innerHeight);
  };

  // Effect to run once on component mount to set initial viewport height
  useEffect(() => {
    updateViewportHeight(); // Set initial viewport height

    // Add event listener for window resize
    window.addEventListener('resize', updateViewportHeight);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Effect to update the body element style whenever viewport height changes
  useEffect(() => {
    document.body.style.setProperty('--vh', `${viewportHeight}px`);
  }, [viewportHeight]); // Trigger effect when viewport height changes

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
    if (isMenuOpen) setIsMenuOpen(false);
    if (isContactOpen) setIsContactOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isAboutOpen) setIsAboutOpen(false);
    if (isContactOpen) setIsContactOpen(false);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  // Automatically close about and menu when contact is opened
  useEffect(() => {
    if (isContactOpen) {
      setIsAboutOpen(false);
      setIsMenuOpen(false);
    }
  }, [isContactOpen]);

  return (
    <div className="flex flex-col bg-green">
      <Head>
        <title>LÀ VIET</title>
        {/* Add your meta tags, links, and other head elements here */}
      </Head>
      <div className="flex h-[var(--vh)] flex-col bg-green">
        <Navigation 
          isAboutOpen={isAboutOpen} 
          setIsAboutOpen={toggleAbout} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={toggleMenu} 
          isContactOpen={isContactOpen} 
          setIsContactOpen={toggleContact} 
        />
        <HomepageSwiper desktopImages={desktopImages} mobileImages={mobileImages}/>
        <FadingComponent image={splashLogo} />
        <AboutComponent isAboutOpen={isAboutOpen}/>
        <MenuComponent isMenuOpen={isMenuOpen}/>
        <ContactComponent isContactOpen={isContactOpen} />
        <Footer  
          isContactOpen={isContactOpen} 
          setIsContactOpen={setIsContactOpen} 
        />
      </div>
    </div>
  );
}
