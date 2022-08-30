import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/Context";
import Loading from "../components/Loading";
import { BsFillGridFill } from "react-icons/bs";
import { BiCarousel } from "react-icons/bi";
// import { FaChevronRight } from "react-icons/fa";

const Shop = () => {
  const [shopGames, setShopGames] = useState([]);
  const { isLoading, setIsLoading, searchTerm, games } = useGlobalContext();

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

  React.useEffect(() => {
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
                <div className='grid-item' key={id}>
                  <img src={background_image} alt={name} />
                  <h3>{name}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    );
  }

  return (
    <>
      <section className='content-container shop'>
        <h2 className='section-title'>Browse</h2>
        <main>
          <div className='games'>
            {shopGames.map((game) => {
              const { id, name, background_image } = game;
              return (
                <div className='item' key={id}>
                  <img src={background_image} alt={name} />
                  <Link to={`/game-details`}>
                    <h3>{name}</h3>
                  </Link>
                </div>
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
