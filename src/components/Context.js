import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isUserActive, setIsUserActive] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState(``);
  const [isLoading, setIsLoading] = useState(true);

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
