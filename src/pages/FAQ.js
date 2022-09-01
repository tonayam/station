import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaChevronRight } from "react-icons/fa";
import { questions } from "../data";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Station - FAQ`;
  });

  const handleClick = (e) => {
    const clicked = e.target.parentElement.nextElementSibling;
    const prevSibling = e.target.previousSibling;
    setActiveQuestion(false);
    clicked.classList.toggle(`show`);
    prevSibling.classList.toggle(`invert`);
  };

  return (
    <>
      <Sidebar />
      <section className='content-container'>
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
      </section>
    </>
  );
};

export default FAQ;
