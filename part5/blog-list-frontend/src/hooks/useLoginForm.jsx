// EXTERNAL MODULES
import { useState } from "react";
// HOOKS
import useErrorTranslator from "@hooks/useErrorTranslator";
import { useIntl } from "react-intl";
// SERVICES
import loginService from "@services/login";
import blogService from "@services/blogs";
// STORES
import loginStore from "@stores/login";

/****************************************************************************** */

export const useLoginForm = (login) => {
  // state for login form data
  const [loginData, setLoginData] = useState(loginStore.emptyLogin);

  // function to handle translations
  const { translateError } = useErrorTranslator(); // errors
  const { formatMessage } = useIntl(); // other translations
  const translated = {
    success: formatMessage({ id: "login.message.success" }),
    error: formatMessage({ id: "login.message.error" }),
    invalidCredentials: formatMessage({
      id: "login.message.invalid-credentials",
    }),
  }; // object with translations

  // function to handle login
  const handleLogin = async (e, addToast) => {
    e.preventDefault();

    try {
      // check if is valid
      const user = await loginService.login(loginData);

      // save user in local storage
      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      // set token for blog actions
      blogService.setToken(user.token);

      // call login to set the user
      login(user);

      // show success toast
      addToast(translated.success, "success");
    } catch (error) {
      // if fields are filled but invalid, show invalid credentials toast
      loginData.username &&
      loginData.password &&
      error.code === "ERR_BAD_REQUEST"
        ? addToast(translated.invalidCredentials, "error")
        : addToast(translateError(error.code) || translated.error, "error"); // another error
    } finally {
      // clear all fields
      clearForm();
    }
  };

  // function to handle input changes
  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // function to clear all fields
  const clearForm = () => setLoginData(loginStore.emptyLogin);

  // return the login data and functions
  return { loginData, handleLogin, handleInputChange };
};
