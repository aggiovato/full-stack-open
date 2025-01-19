// EXTERNAL MODULES
import { useState } from "react";

// SERVICES
import loginService from "@services/login";
import blogService from "@services/blogs";

// STORES
import loginStore from "@stores/login";

export const useLoginForm = (handleUser) => {
  const [loginData, setLoginData] = useState(loginStore.emptyLogin);

  const handleLogin = async (e, addToast) => {
    e.preventDefault();

    try {
      // try to get the user from the server
      const user = await loginService.login(loginData);

      // create the user in the local storage
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      // set the token in the blog service: Bearer + JWT
      blogService.setToken(user.token);
      handleUser(user);

      // logs the action in the toast
      addToast("Logged in successfully", "success");
    } catch (error) {
      addToast(error.response?.data?.error || "Login failed", "error");
    } finally {
      clearForm();
    }
  };

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const clearForm = () => setLoginData(loginStore.emptyLogin);

  return { loginData, handleLogin, handleInputChange };
};
