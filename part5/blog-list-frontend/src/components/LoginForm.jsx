import { useState } from "react";

import LinesAnimation from "./LinesAnimation";

import loginService from "../services/login";
import blogService from "../services/blogs";

import { useToast } from "../hooks/useToast";

import {
  LoginFormContainer,
  FormWrapper,
  FormHeading,
  StyledForm,
  StyledInput,
  StyledButton,
} from "../styles/LoginForm.styles";

const LoginForm = ({ handleUser }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const { addToast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login(loginData);
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.token);
      handleUser(user);

      addToast("Logged in successfully", "success");
    } catch (error) {
      addToast(error.response.data.error, "error");
    } finally {
      clearForm();
    }
  };

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const clearForm = () => setLoginData({ username: "", password: "" });

  return (
    <LoginFormContainer>
      <FormWrapper>
        <FormHeading>Log-in</FormHeading>
        <StyledForm onSubmit={handleLogin}>
          <StyledInput
            type="text"
            name="username"
            value={loginData.username}
            placeholder="Username"
            onChange={handleInputChange}
          />
          <StyledInput
            type="password"
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormWrapper>
      <LinesAnimation />
    </LoginFormContainer>
  );
};

export default LoginForm;
