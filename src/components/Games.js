import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "./Context";
import UpcomingGames from "../home-Categories/UpcomingGames";
import PopularCat from "../home-Categories/PopularCat";
import EarlyAccess from "../home-Categories/EarlyAccess";

const Games = () => {
  const { searchTerm, isLoading, games } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (searchTerm) {
    return (
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
    );
  }

  return (
    <section className='games-section'>
      {/* UPCOMING GAMES */}
      <h3 className='section-title'>Upcoming games</h3>
      <UpcomingGames />

      {/* POPULAR GAMES */}
      <h3 className='section-title'>Popular</h3>
      <PopularCat />

      {/* EARLY ACCESS */}
      <h3 className='section-title'>Early Access</h3>
      <EarlyAccess />
    </section>
  );
};

export default Games;
