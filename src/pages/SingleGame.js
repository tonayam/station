import React, { useState, useCallback, useEffect } from "react";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../components/Context";

// IMPORT LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SingleGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsSearch, setSearchTerm } = useGlobalContext();
  const [game, setGame] = useState([]);
  const [screenshots, setScrenshots] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Insidious - Game Details`;
    setSearchTerm(``);
  }, [setSearchTerm]);

  const fetchGame = useCallback(async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d8a8ec5e46mshd5baca57a76d9b8p1aa97ejsna9f23e69f47c",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=ed9b70acf638447bb6a289215bf7c6df`,
        options
      );
      const data = await response.json();
      setGame(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [setIsLoading, id]);

  const screenshot = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d8a8ec5e46mshd5baca57a76d9b8p1aa97ejsna9f23e69f47c",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://rawg-video-games-database.p.rapidapi.com/games/${id}/screenshots?key=ed9b70acf638447bb6a289215bf7c6df`,
        options
      );
      const data = await response.json();
      setScrenshots(data.results.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchGame();
    screenshot();
  }, [fetchGame, id, screenshot]);

  if (isLoading) {
    return <Loading />;
  }
  const {
    description_raw,
    description,
    background_image,
    name,
    genres,
    released,
    esrb_rating,
    publishers,
    developers,
    website,
    platforms,
  } = game;

  const createMarkup = () => {
    return { __html: `${description}` };
  };

  return (
    <section
      className='content-container single-game'
      onMouseOver={() => setIsSearch(false)}
    >
      <section className='hero-image'>
        <LazyLoadImage src={background_image} alt={name} />
        <div className='mini-details'>
          <h2>{name}</h2>
          <p className='desc'>{description_raw.substr(0, 200)}...</p>
          <div className='price-div'>
            <h3 className='price'>$39.99</h3>
            <div className='btns'>
              <button className='btn gold-btn'>Purchase for self</button>
              <button className='btn'>Purchase as gift</button>
            </div>
          </div>
        </div>
      </section>
      <div className='content'>
        {window.innerWidth < 800 ? (
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            className='mySwiper swiper-screenshots'
          >
            {screenshots.map((screenshot) => {
              const { image, id } = screenshot;
              return (
                <SwiperSlide className='screenshot' key={id}>
                  <LazyLoadImage src={image} alt={name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <section className='screenshots'>
            {screenshots.map((screenshot) => {
              const { image, id } = screenshot;
              return (
                <div className='screenshot' key={id}>
                  <LazyLoadImage src={image} alt={name} />
                </div>
              );
            })}
          </section>
        )}
        <div className='tab'>
          <ul>
            <li className='active'>Overview</li>
            <li>Description</li>
            <li>More</li>
          </ul>
        </div>
        <h3 className='section-title'>Overview</h3>
        <div className='overview'>
          <div className='info'>
            <h4>Genre</h4>
            <ul className='items'>
              {genres.map((genre) => {
                return <li key={genre.id}>{genre.name} </li>;
              })}
            </ul>
          </div>
          <div className='info'>
            <h4>Release Date</h4>
            <ul className='items'>
              <li>{released}</li>
            </ul>
          </div>
          <div className='info'>
            <h4>Rating</h4>
            <ul className='items'>
              <li>{esrb_rating ? esrb_rating.name : null} </li>
            </ul>
          </div>
          <div className='info'>
            <h4>Publisher</h4>
            <ul className='items'>
              {publishers.map((publisher) => {
                return <li key={publisher.id}>{publisher.name} </li>;
              })}
            </ul>
          </div>
          <div className='info'>
            <h4>Developer</h4>
            <ul className='items'>
              {developers.map((developer) => {
                return <li key={developer.id}>{developer.name} </li>;
              })}
            </ul>
          </div>
          <div className='info'>
            <h4>Game Website</h4>
            <ul className='items'>
              <li>{website}</li>
            </ul>
          </div>
        </div>
        <h3 className='section-title'>Description</h3>
        <div
          className='overview'
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        <h3 className='section-title'>System Requirements</h3>
        <div className='overview'>
          <div className='info'>
            <ul className='items'>
              {platforms.map((item) => {
                const { requirements, id } = item;
                return requirements ? (
                  <div className='req' key={id}>
                    <p>{requirements.minimum}</p>
                    <br />
                    <p>{requirements.recommended}</p>
                  </div>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleGame;
