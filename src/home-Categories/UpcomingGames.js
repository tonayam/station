import React, { useState, useCallback } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// IMPORT LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const UpcomingGames = () => {
  const [upcomingGames, setUpcomingGames] = useState([]);

  const fetchEarlyAccess = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d8a8ec5e46mshd5baca57a76d9b8p1aa97ejsna9f23e69f47c",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://rawg-video-games-database.p.rapidapi.com/games?dates=2022-08-10,2022-12-10&ordering=-added&key=ed9b70acf638447bb6a289215bf7c6df`,
        options
      );
      const data = await response.json();
      const { results } = data;
      setUpcomingGames(results.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    fetchEarlyAccess();
  }, [fetchEarlyAccess]);

  return (
    <>
      {window.innerWidth < 800 ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          slidesPerGroupSkip={2}
          modules={[Pagination]}
          className='mySwiper'
        >
          {upcomingGames.map((game) => {
            const { id, background_image, name } = game;
            return (
              <SwiperSlide className='upcoming' key={id}>
                <Link to={`/game-details/${id}`}>
                  <div className='game'>
                    <LazyLoadImage src={background_image} alt={name} />
                    <h3>{name}</h3>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          slidesPerGroupSkip={2}
          modules={[Pagination]}
          className='mySwiper'
        >
          {upcomingGames.map((game) => {
            const { id, background_image, name } = game;
            return (
              <SwiperSlide className='upcoming' key={id}>
                <Link to={`/game-details/${id}`}>
                  <div className='game'>
                    <LazyLoadImage src={background_image} alt={name} />
                    <h3>{name}</h3>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default UpcomingGames;
