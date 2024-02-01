import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slideNext()} className='absolute top-[0px] left-[0px] z-[33] h-[100vh] w-[100vw]'>Next</button>
    </div>
  );
};