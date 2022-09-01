import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { BiPlusCircle } from "react-icons/bi";
import { RiEqualizerLine } from "react-icons/ri";
import { myGames } from "../data";

const MyGames = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Station - My Games`;
  });
  return (
    <>
      <Sidebar />
      <section className='content-container my-games'>
        <div className='my-games-nav'>
          <div className='add-game'>
            <BiPlusCircle className='icon' />
            <h4>Add new game</h4>
          </div>
          <div className='filter'>
            <RiEqualizerLine className='icon' />
            <h4>Filter</h4>
          </div>
        </div>
        <hr />
        <div className='my-games-container'>
          {myGames.map((game) => {
            const { image, id, title, achievement } = game;
            return (
              <div className='game' key={id}>
                <div className='image'>
                  <img src={image} alt={title} />
                </div>
                <div className='title'>
                  <h3>{title}</h3>
                  <p>
                    Achievements <span>{achievement}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyGames;
