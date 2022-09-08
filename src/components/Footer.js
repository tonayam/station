import React from "react";

const Footer = () => {
  return (
    <footer>
      <article className='col-container'>
        <div className='col'>
          <ul>
            <li>Legal</li>
            <li>Contact Us</li>
            <li>Jobs</li>
            <li>Support</li>
          </ul>
        </div>
        <div className='col'>
          <ul>
            <li>Terms of Sale</li>
            <li>User Agreement</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Refunds</li>
          </ul>
        </div>
        <div className='col'>
          <ul>
            <li>2022 Insidious Games Corporation</li>
            <li>RAWG</li>
          </ul>
        </div>
      </article>
      <hr />
      <p>
        All rights reserved. All trademarks are property of their respective
        owners in the US and other countries. VAT included in all prices where
        applicable.
      </p>
    </footer>
  );
};

export default Footer;
