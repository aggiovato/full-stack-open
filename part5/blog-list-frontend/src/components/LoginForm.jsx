import { useState } from "react";

import Message from "./Message";

import loginService from "../services/login";
import blogService from "../services/blogs";

const LoginForm = ({ handleUser, style }) => {
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
      <div>
        username
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleInputChange}
          style={style.input}
        />
      </div>
      <div>
        password
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          style={style.input}
        />
      </div>
      <button type="submit" style={style.button}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
