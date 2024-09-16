import React, { useState, useEffect } from 'react';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { EffectFade } from 'swiper/modules';
import { SwiperNavButton } from './SwiperNavButton';
import 'swiper/swiper-bundle.css'; // Ensure this path is correct

export const HomepageSwiper = ({ desktopImages, mobileImages }) => {
  const swiper = useSwiper();
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 900);
    }

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
  }, []);

  return (
    <>
      <div className="relative z-[4]"> 
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={false}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          effect={'fade'}
          modules={[EffectFade]}
          
          >
          {isMobile
            ? 
            mobileImages.map((image, index) => (
              <SwiperSlide key={index} className="!min-w-screen !relative !h-[0px] !w-screen pt-[var(--vh)]"> 
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  width={1242}  // Set the actual width of the image
                  height={2208} // Set the actual height of the image
                  className='absolute inset-[0px] h-full w-full object-cover object-center !min-w-screen !w-screen block h-full max-w-full'
                  /> 
              </SwiperSlide>
            ))
            :
            desktopImages.map((image, index) => (
              <SwiperSlide key={index} className="!min-w-screen !relative !h-[0px] !w-screen pt-[var(--vh)]"> 
                <Image
                  src={image}
                  alt={`Slide ${index}`}
                  width={1920}  // Set the actual width of the image
                  height={1080} // Set the actual height of the image
                  className='absolute inset-[0px] h-full w-full object-cover object-center !min-w-screen !w-screen block h-full max-w-full'
                  /> 
              </SwiperSlide>
              
              ))}
          
          <SwiperNavButton />
        </Swiper>
      </div>
    </>
  );
};