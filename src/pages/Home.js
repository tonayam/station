import React, { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import Games from "../components/Games";
import { useGlobalContext } from "../components/Context";

const Home = () => {
  const { setIsSearch } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Insidious`;
  });

  return (
    <section
      className='content-container'
      onMouseOver={() => setIsSearch(false)}
    >
      <HeroSlider />
      <Games />
    </section>
  );
};

export default Home;
