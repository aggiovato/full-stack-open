import { useState } from "react";

import loginService from "../services/login";
import blogService from "../services/blogs";

const LoginForm = ({ handleUser, style }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.token);
      handleUser(user);
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login to Application</h2>
      <div>
        username
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={style.input}
        />
      </div>
      <div>
        password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
