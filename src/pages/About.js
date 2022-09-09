import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import gamepad from "../images/gamepad.png";
import community from "../images/community.png";
import serviceShield from "../images/service-shield.png";
import articleOne from "../images/article-1.png";
import articleTwo from "../images/article-2.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useGlobalContext } from "../components/Context";

const About = () => {
  const { searchTerm, setSearchTerm, games } = useGlobalContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Insidious - About Us`;
    setSearchTerm(``);
  }, [setSearchTerm]);

  if (searchTerm) {
    return (
      <section className='content-container about'>
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
      <Sidebar />
      <section className='content-container about'>
        <section className='header'>
          <div className='hero-container'>
            <div className='text'>
              <p>
                Play amazing game and connect with all your friends all at once.
              </p>
            </div>
          </div>
          <div className='grid-container'>
            <div className='grid-item'>
              <p>Games for all platforms</p>
              <img src={gamepad} alt='gamepad' />
            </div>
            <div className='grid-item'>
              <p>Amazing community of gamers</p>
              <img src={community} alt='gamepad' />
            </div>
            <div className='grid-item'>
              <p>Top notch customer service</p>
              <img src={serviceShield} alt='gamepad' />
            </div>
          </div>
        </section>
        <section className='about-info'>
          <article className='aritcle-one'>
            <div className='text'>
              <h2>Games for all platforms</h2>
              <p>
                PC, Xbox, Playstation. Whatever platform you're on, we have the
                games for you.
              </p>
            </div>
            <div className='image'>
              <img src={articleOne} alt='Apex Character' />
            </div>
          </article>
          <article className='aritcle-two'>
            <div className='image'>
              <img src={articleTwo} alt='Apex Character' />
            </div>
            <div className='text'>
              <h2>Amazing community of gamers</h2>
              <p>Play, chat and connect with your friends, all in one place.</p>
            </div>
          </article>
          <article className='aritcle-three'>
            <div className='text'>
              <h1>Top notch customer service</h1>
              <h3>Help whenever you need it.</h3>
              <h4 className='get-help'>Get help live and in person.</h4>
              <h3 className='faq'>FAQs</h3>
              <p>
                Go through quetion frequently asked by community members to find
                answers to your similar questions.
              </p>
            </div>
          </article>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default About;
