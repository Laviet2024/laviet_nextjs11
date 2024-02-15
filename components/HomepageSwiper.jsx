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
        {desktopImages.map((image, index) => (
          <div key={index} className="m-2">
            <SwiperSlide key={index}> 
              <Image
                src={image}
                width={1920}  // Set the actual width of the image
                height={1080} // Set the actual height of the image
              /> 
            </SwiperSlide>
           
          </div>
        ))}
       
       <SwiperNavButton />
        {/* <button class="absolute top-[0px] left-[0px] z-[33] h-[100vh] w-[100vw]"></button> */}
      </Swiper>