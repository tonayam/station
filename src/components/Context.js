import React, { useContext, useState } from "react";
import { useFetch } from "../useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isUserActive, setIsUserActive] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState(``);
  const [isSearch, setIsSearch] = useState(false);

  const { loading, data } = useFetch(
    `https://rawg-video-games-database.p.rapidapi.com/games?search=${searchTerm}&search_precise=true&key=ed9b70acf638447bb6a289215bf7c6df`
  );

  const openRegisterPage = () => {
    setSignIn(true);
  };
  const openLoginPage = () => {
    setSignIn(false);
  };

  const userLoggedIn = () => {
    setIsUserActive(true);
  };

  const communityActive = () => {
    setIsUserActive(true);
  };
  const communityInactive = () => {
    setIsUserActive(false);
  };

  return (
    <AppContext.Provider
      value={{
        isUserActive,
        communityActive,
        communityInactive,
        signIn,
        openRegisterPage,
        openLoginPage,
        userLoggedIn,
        searchTerm,
        setSearchTerm,
        loading,
        data,
        isSearch,
        setIsSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
