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

export const useLoginForm = (handleUser) => {
  const [loginData, setLoginData] = useState(loginStore.emptyLogin);
  const { translateError } = useErrorTranslator();
  const { formatMessage } = useIntl();

  const translated = {
    success: formatMessage({ id: "login.message.success" }),
    error: formatMessage({ id: "login.message.error" }),
    invalidCredentials: formatMessage({
      id: "login.message.invalid-credentials",
    }),
  };

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
      addToast(translated.success, "success");
    } catch (error) {
      addToast(translateError(error.code) || translated.error, "error");
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
