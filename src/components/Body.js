import React from "react";
import HeroSlider from "./HeroSlider";
import Games from "./Games";
const Body = () => {
  return (
    <section className='content-container'>
      <HeroSlider />
      <Games />
    </section>
  );
};

export default Body;
