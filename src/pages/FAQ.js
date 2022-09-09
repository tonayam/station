import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { questions } from "../data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useGlobalContext } from "../components/Context";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(false);
  const { searchTerm, setSearchTerm, games } = useGlobalContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Insidious - FAQ`;
    setSearchTerm(``);
  }, [setSearchTerm]);

  const handleClick = (e) => {
    const clicked = e.target.parentElement.nextElementSibling;
    const prevSibling = e.target.previousSibling;
    setActiveQuestion(false);
    clicked.classList.toggle(`show`);
    prevSibling.classList.toggle(`invert`);
  };

  if (searchTerm) {
    return (
      <section className='content-container faq'>
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
      <section className='content-container faq'>
        {questions.map((question) => {
          const { id, quest, answer } = question;
          return (
            <article key={id} className='question'>
              <div className='question-container'>
                <FaChevronRight className={`icon `} />
                <h3 onClick={handleClick}>{quest}</h3>
              </div>
              <div className={`${activeQuestion ? "answer show" : "answer"}`}>
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
        <Footer />
      </section>
    </>
  );
};

export default FAQ;
