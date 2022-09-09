import React from "react";
import logo2 from "../images/logo-2.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <section className='section'>
        <Link to='/'>
          <img src={logo2} alt='logo' />
        </Link>
        <div className='form-container'>
          <form action=''>
            <h3>Forgot Password</h3>
            <br />
            <label htmlFor='email-username'>Email or username</label> <br />
            <input type='text' />
            <br /> <br />
            <button className='btn gold-btn'>Next</button>
            <p>
              Don't have an account yet?
              <Link to='/sign-in'>
                <span> Click here to register</span>
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
