import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  const handleNextSlide = () => {
    swiper.slideNext(); // Move to the next slide
  };

  return (
    <div className="swiper-nav-btns">
      <button onClick={handleNextSlide} className="absolute top-0 left-0 z-10 h-full w-full">
      </button>
    </div>
  );
};
