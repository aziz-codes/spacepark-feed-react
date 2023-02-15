import { createContext, useContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config";
import { Navigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const logout = () => {
    signOut(auth);
    setLoggedIn(false);
  };

  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, provider).then((res) => {
      setUser(res.user);
      setLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(res.user));
      <Navigate to="/" replace={true} />;
    });
  };
  return (
    <AppContext.Provider
      value={{ googleSignin, logout, user, loggedIn, setLoggedIn }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const Store = () => useContext(AppContext);
