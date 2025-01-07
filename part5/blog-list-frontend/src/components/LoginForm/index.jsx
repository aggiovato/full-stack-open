// IMPORT COMPONENTS
import CInputsMapper from "@customs/CInputsMapper";
import LinesAnimation from "@animations/LinesAnimation";

// CUSTOM HOOKS
import { useLoginForm } from "@hooks/useLoginForm";
import { useToast } from "@hooks/useToast";

// STYLES
import {
  LoginFormContainer,
  FormWrapper,
  FormHeading,
  StyledForm,
  StyledButton,
} from "@styles/LoginForm.styles";

const LoginForm = ({ handleUser }) => {
  const { loginData, handleLogin, handleInputChange } =
    useLoginForm(handleUser);
  const { addToast } = useToast();

  return (
    <LoginFormContainer>
      <FormWrapper>
        <FormHeading>Welcome to Bloglist</FormHeading>
        <StyledForm onSubmit={(e) => handleLogin(e, addToast)}>
          <CInputsMapper
            mapper={loginData}
            eventHandlers={handleInputChange}
            type="name"
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormWrapper>
      <LinesAnimation />
    </LoginFormContainer>
  );
};

export default LoginForm;
