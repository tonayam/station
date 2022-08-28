import React from "react";
import loadingSpinner from "../images/loading-spinner.gif";

const Loading = () => {
  return (
    <section className='loading'>
      <img src={loadingSpinner} alt='loading spinner' />
    </section>
  );
};

export default Loading;
