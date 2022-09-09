import React from "react";
import logo2 from "../images/logo-2.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/Context";

const SignIn = () => {
  const { signIn, userLoggedIn } = useGlobalContext();
  return (
    <>
      {signIn ? (
        <section className='section'>
          <Link to='/'>
            <img src={logo2} alt='logo' />
          </Link>
          <div className='form-container'>
            <form action=''>
              <h3>Register</h3>
              <br />
              <div className='name-username'>
                <div className='name'>
                  <label htmlFor='fullname'>Full name</label>
                  <input type='text' />
                </div>
                <div className='username'>
                  <label htmlFor='username'>Username</label>
                  <input type='text' />
                </div>
              </div>{" "}
              <br />
              <label htmlFor='email-username'>Email</label> <br />
              <input type='email' />
              <br /> <br />
              <label htmlFor='email-username'>Password</label> <br />
              <input type='password' /> <br /> <br />
              <p>
                Forgot your password?
                <span>
                  <Link to=''>Click here</Link>
                </span>
                <button className='btn gold-btn'>Sign in</button>
                <button className='btn'>
                  <FcGoogle /> Continue with gmail
                </button>
              </p>
            </form>
          </div>
        </section>
      ) : (
        <section className='section'>
          <Link to='/'>
            <img src={logo2} alt='logo' />
          </Link>
          <div className='form-container'>
            <form action=''>
              <h3>sign in</h3>
              <br />
              <label htmlFor='email-username'>Email or username</label> <br />
              <input type='text' />
              <br /> <br />
              <label htmlFor='email-username'>Password</label> <br />
              <input type='password' /> <br /> <br />
              <p>
                Forgot your password?
                <Link to='/forgot-password'>
                  <span> Click here</span>
                </Link>
                <Link to='/'>
                  <button className='btn gold-btn' onClick={userLoggedIn}>
                    Sign in
                  </button>
                </Link>
                <button className='btn'>
                  <FcGoogle /> Continue with gmail
                </button>
              </p>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default SignIn;
