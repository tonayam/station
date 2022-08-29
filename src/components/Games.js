import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useGlobalContext } from "./Context";
const Games = () => {
  const [games, setGames] = useState([]);
  const { searchTerm, setIsLoading, isLoading } = useGlobalContext();

  // FETCH GAMES FROM RAWG API
  const fetchGames = async () => {
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
        `https://rawg-video-games-database.p.rapidapi.com/games?search=${searchTerm}&key=ed9b70acf638447bb6a289215bf7c6df`,
        options
      );
      const data = await response.json();
      const { results } = data;
      setGames(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [searchTerm]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='games-section'>
      <h3 className='section-title'>Popular</h3>
      <div className='games-grid'>
        {games.map((game) => {
          const { id, name, background_image } = game;
          return (
            <div className='grid-item' key={id}>
              <img src={background_image} alt={name} />
              <Link to={`/game-details/${id}`}>
                <h3>{name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Games;
