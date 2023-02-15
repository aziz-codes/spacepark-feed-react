import { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const logout = () => {
    signOut(auth);
    setLoggedIn(false);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoggedIn(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
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
