import { useState } from "react";

import Message from "./customs/Message";
import InputPanel from "./customs/InputPanel";

import loginService from "../services/login";
import blogService from "../services/blogs";

const LoginForm = ({ handleUser, styles }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({
    display: false,
    text: "",
    type: "error",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login(loginData);
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.token);
      handleUser(user);
    } catch (error) {
      setMessage({
        display: true,
        text: error.response.data.error,
        type: "error",
      });
    } finally {
      clearForm();
    }
  };

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const clearForm = () => setLoginData({ username: "", password: "" });

  return (
    <form onSubmit={handleLogin}>
      <h2>Login to Application</h2>
      <Message message={message} handleMessage={setMessage} />
      <InputPanel
        data={loginData}
        eventHandler={handleInputChange}
        styles={styles.input}
      />
      <button type="submit" style={styles.button}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
