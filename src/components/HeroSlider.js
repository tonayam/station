import React, { useState } from "react";
import { sliderData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSlider = () => {
  const [heroImage, setHeroImage] = useState(sliderData);

  return (
    <section className='hero-slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {heroImage.map((slide) => {
          const { id, img } = slide;
          return (
            <SwiperSlide key={id}>
              <img src={img} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
