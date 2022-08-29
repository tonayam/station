import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/Context";
import Loading from "../components/Loading";

const Shop = () => {
  const [shopGames, setShopGames] = useState([]);
  const { isLoading, setIsLoading, searchTerm } = useGlobalContext();

  const fetchShopGames = async () => {
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
  };

  React.useEffect(() => {
    fetchShopGames();
  }, [searchTerm]);

  if (isLoading) {
    return <Loading />;
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
          {window.innerWidth > 800 && <div className='filters'></div>}
        </main>
      </section>
    </>
  );
};

export default Shop;
