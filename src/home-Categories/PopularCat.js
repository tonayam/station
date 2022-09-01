import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// IMPORT LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const PopularCat = () => {
  const [popularGames1, setPopularGames1] = useState([]);
  const [popularGames2, setPopularGames2] = useState([]);

  const fetchPopularGames = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d8a8ec5e46mshd5baca57a76d9b8p1aa97ejsna9f23e69f47c",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://rawg-video-games-database.p.rapidapi.com/games?dates=2021-01-01,2022-12-31&key=ed9b70acf638447bb6a289215bf7c6df`,
        options
      );
      const data = await response.json();
      const { results } = data;
      setPopularGames1(results.slice(0, 6));
      setPopularGames2(results.slice(7, 13));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchPopularGames();
  }, []);

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
        <SwiperSlide className='pop-grid'>
          {popularGames1.map((game) => {
            const { id, name, background_image } = game;
            return (
              <Link to={`/game-details/${id}`} className='link' key={id}>
                <div className='grid-item'>
                  <LazyLoadImage src={background_image} alt={name} />
                  <h3>{name}</h3>
                </div>
              </Link>
            );
          })}
        </SwiperSlide>
        <SwiperSlide className='pop-grid'>
          {popularGames2.map((game) => {
            const { id, name, background_image } = game;
            return (
              <Link to={`/game-details/${id}`} key={id} className='link'>
                <div className='grid-item'>
                  <LazyLoadImage src={background_image} alt={name} />
                  <h3>{name}</h3>
                </div>
              </Link>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PopularCat;
