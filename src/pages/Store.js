import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/Context";
import Loading from "../components/Loading";
import { BsFillGridFill, BsFilter } from "react-icons/bs";
import { BiCarousel } from "react-icons/bi";
// import { FaChevronRight } from "react-icons/fa";

// IMPORT LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Shop = () => {
  const [shopGames, setShopGames] = useState([]);
  const { searchTerm, games, setIsSearch } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  const fetchShopGames = useCallback(async () => {
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
        `https://rawg-video-games-database.p.rapidapi.com/games?dates=2015-01-01,2022-12-31&ordering=-added&search=${searchTerm}&key=ed9b70acf638447bb6a289215bf7c6df`,
        options
      );
      const data = await response.json();
      const { results } = data;
      setShopGames(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm, setIsLoading]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Insidious - Store`;
  });

  useEffect(() => {
    fetchShopGames();
  }, [searchTerm, fetchShopGames]);

  if (isLoading) {
    return <Loading />;
  }

  if (searchTerm) {
    return (
      <section className='content-container shop'>
        <section className='games-section'>
          <h3 className='section-title'>searched Games</h3>
          <div className='games-grid'>
            {games.map((game) => {
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
          </div>
        </section>
      </section>
    );
  }

  return (
    <>
      <section
        className='content-container shop'
        onMouseOver={() => setIsSearch(false)}
      >
        <div className='title'>
          <h2 className='section-title'>Browse</h2>
          {window.innerWidth < 800 && <BsFilter className='icon' />}
        </div>
        <main>
          <div className='games'>
            {shopGames.map((game) => {
              const { id, name, background_image } = game;
              return (
                <Link to={`/game-details/${id}`} key={id} className='link'>
                  <div className='item'>
                    <LazyLoadImage src={background_image} alt={name} />
                    <h3>{name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
          {window.innerWidth > 800 && (
            <div className='filters'>
              <h4>LAYOUT</h4>
              <hr />
              <div className='layout-1'>
                <p>Cards</p>
                <BsFillGridFill className='icon' />
              </div>
              <div className='layout-2'>
                <p>Carousel</p>
                <BiCarousel className='icon' />
              </div>
              <h4>sort</h4>
              <hr />
              <h4>filter</h4>
              <hr />
            </div>
          )}
        </main>
      </section>
    </>
  );
};

export default Shop;
