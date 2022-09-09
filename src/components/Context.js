import React, { useContext, useState } from "react";
import { useFetch } from "../useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isUserActive, setIsUserActive] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState(``);
  const [isLoading, setIsLoading] = useState(true);
  // const [games, setGames] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const { loading, data } = useFetch(
    `https://rawg-video-games-database.p.rapidapi.com/games?search=${searchTerm}&search_precise=true&key=ed9b70acf638447bb6a289215bf7c6df`
  );

  // FETCH GAMES FROM RAWG API
  // const fetchGames = useCallback(async () => {
  //   setIsLoading(true);
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "d8a8ec5e46mshd5baca57a76d9b8p1aa97ejsna9f23e69f47c",
  //       "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  //     },
  //   };
  //   try {
  //     const response = await fetch(
  //       `https://rawg-video-games-database.p.rapidapi.com/games?search=${searchTerm}&search_precise=true&key=ed9b70acf638447bb6a289215bf7c6df`,
  //       options
  //     );
  //     const data = await response.json();
  //     const { results } = data;
  //     setGames(results);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // }, [searchTerm, setIsLoading]);

  // useEffect(() => {
  //   fetchGames();
  // }, [searchTerm, fetchGames]);

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
        setIsLoading,
        isLoading,
        // games,
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
