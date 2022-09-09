import React, { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import Games from "../components/Games";
import Footer from "../components/Footer";
import { useGlobalContext } from "../components/Context";

const Home = () => {
  const { setIsSearch, setSearchTerm } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Insidious`;
    setSearchTerm(``);
  }, [setSearchTerm]);

  return (
    <section
      className='content-container'
      onMouseOver={() => setIsSearch(false)}
    >
      <HeroSlider />
      <Games />
      <Footer />
    </section>
  );
};

export default Home;
