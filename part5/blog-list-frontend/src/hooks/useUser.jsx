// EXTERNAL MODULES
import { useState, useEffect } from "react";
// SERVICES
import blogService from "@services/blogs";
// I18N
import { LOCALES } from "@i18n";

/*********************************************************************************** */

const useUser = () => {
  const [user, setUser] = useState(null);
  const [localeLanguage, setLocaleLanguage] = useState(LOCALES.EN.code);

  useEffect(() => {
    // USER LOGIN
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      blogService.setToken(user.token);
    }

    // USER LANGUAGE
    const storedLanguage =
      window.localStorage.getItem("localeLanguage") || LOCALES.EN.code;
    setLocaleLanguage(storedLanguage);
  }, []);

  const login = (user) => {
    if (!user || !user.token || !user.username) {
      throw new Error("Invalid user data");
    }
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  const changeLanguage = (language) => {
    setLocaleLanguage(language);
    window.localStorage.setItem("localeLanguage", language);
  };

  return { user, login, logout, localeLanguage, changeLanguage };
};

export default useUser;
