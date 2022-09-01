import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaSistrix, FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const {
    isUserActive,
    openRegisterPage,
    openLoginPage,
    setSearchTerm,
    isSearch,
    setIsSearch,
  } = useGlobalContext();

  const searchValue = React.useRef(``);
  const searchGames = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <>
      <nav>
        <button
          className={isToggleOpen ? `button show` : `button`}
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        >
          <FaBars className='toggle-bars' />
        </button>
        <div
          className={isSearch ? `search-container show` : `search-container`}
        >
          <div className='sidebar-search'>
            <FaSistrix className='search-icon' />
            <input
              className='mobile-search'
              type='text'
              placeholder='Search games'
              ref={searchValue}
              onChange={searchGames}
              onKeyPress={(e) => {
                if (e.key === `Enter` && window.innerWidth < 800) {
                  setIsSearch(!isSearch);
                  this.blur();
                }
              }}
            />
          </div>
        </div>
        <div className='icon'>
          {!isSearch && (
            <FaSistrix
              className='search-icon'
              onClick={() => setIsSearch(!isSearch)}
            />
          )}
        </div>
      </nav>
      <aside className={`${isToggleOpen ? `sidebar show` : `sidebar`}`}>
        <FaTimes
          className='close-sidebar'
          onClick={() => setIsToggleOpen(!isToggleOpen)}
        />

        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' className='sidebar-logo' />
          </Link>
        </div>
        {window.innerWidth > 800 && (
          <div className='search-container'>
            <div className='sidebar-search'>
              <FaSistrix className='search-icon' />
              <input
                type='text'
                placeholder='Search games'
                ref={searchValue}
                onChange={searchGames}
                onKeyPress={(e) => {
                  if (e.key === `Enter` && window.innerWidth < 800) {
                    setIsToggleOpen(!isToggleOpen);
                  }
                }}
              />
            </div>
          </div>
        )}

        <ul className='links'>
          <li className='link'>
            <Link
              to='/'
              onClick={() =>
                window.innerWidth < 800 && setIsToggleOpen(!isToggleOpen)
              }
            >
              <h4>home</h4>
            </Link>
          </li>
          <li className='link'>
            <Link
              to='/store'
              onClick={() =>
                window.innerWidth < 800 && setIsToggleOpen(!isToggleOpen)
              }
            >
              <h4>store</h4>
            </Link>
          </li>
          {isUserActive && (
            <li className='link'>
              <Link to='/my-games'>
                <h4>My games</h4>
              </Link>
            </li>
          )}
          <li className='link'>
            <a href='#'>
              <h4>communities</h4>
            </a>
            {isUserActive && (
              <ul className='community-links'>
                <li>
                  <a href='#'>All communities</a>
                </li>
                <li>
                  <a href='#'>My communities</a>
                </li>
                <li>
                  <a href='#'>Friends</a>
                </li>
                <li>
                  <a href='#'>Messages</a>
                </li>
                <li>
                  <a href='#'>Notifications</a>
                </li>
              </ul>
            )}
          </li>
          {isUserActive && (
            <li className='link'>
              <a href='#'>
                <h3>My Profile</h3>
              </a>
            </li>
          )}
        </ul>
        <hr />

        <ul className='mini-links'>
          <li>
            <Link to='/about-us'>About</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <a href='#'>Language Preference</a>
          </li>
        </ul>
        {!isUserActive && (
          <div className='buttons'>
            <Link
              to='/sign-in'
              className='btn gold-btn'
              onClick={openLoginPage}
            >
              Sign in
            </Link>
            <Link to='/sign-in' className='btn' onClick={openRegisterPage}>
              Register
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
