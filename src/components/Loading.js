import React from "react";
import loader from "../images/loader.gif";

const Loading = () => {
  return (
    <section className='loading'>
      <img src={loader} alt='loader' />
    </section>
  );
};

export default Loading;
