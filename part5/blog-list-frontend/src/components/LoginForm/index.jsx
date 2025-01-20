// CUSTOM COMPONENTS
import { CButton, CInputsMapper } from "@customs";
// ANIMATIONS
import LinesAnimation from "@animations/LinesAnimation";
import { HoverGlow } from "@animations/HoverGlow";

// CUSTOM HOOKS
import { useLoginForm, useToast } from "@hooks";

// STYLES
import {
  LoginFormContainer,
  FormWrapper,
  FormHeading,
  StyledForm,
} from "@styles/LoginForm.styles";

const LoginForm = ({ handleUser }) => {
  const { loginData, handleLogin, handleInputChange } =
    useLoginForm(handleUser);
  const { addToast } = useToast();

  return (
    <LoginFormContainer>
      <FormWrapper>
        <FormHeading>
          <HoverGlow scale={1.02}>Welcome to Bloglist</HoverGlow>
        </FormHeading>
        <StyledForm onSubmit={(e) => handleLogin(e, addToast)}>
          <CInputsMapper
            mapper={loginData}
            eventHandlers={handleInputChange}
            type="name"
          />
          <CButton type="submit">Login</CButton>
        </StyledForm>
      </FormWrapper>
      <LinesAnimation />
    </LoginFormContainer>
  );
};

export default LoginForm;
