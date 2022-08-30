import React, { useState } from "react";
import { sliderData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

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
          const { id, img, text, btn, link } = slide;
          return (
            <SwiperSlide key={id}>
              <img src={img} alt='' />
              <div className='overlay'>
                <p>{text}</p>
                <Link to={link} className='btn'>
                  {btn}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
