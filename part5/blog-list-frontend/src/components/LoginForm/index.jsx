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

// I18N
import { translate } from "@i18n";

const LoginForm = ({ handleUser }) => {
  const { loginData, handleLogin, handleInputChange } =
    useLoginForm(handleUser);
  const { addToast } = useToast();

  return (
    <LoginFormContainer>
      <FormWrapper>
        <FormHeading>
          <HoverGlow fontSize={22} firstColor="#46b9c3" rotate={0} scale={1.02}>
            {translate("login.title")}
          </HoverGlow>
        </FormHeading>
        <StyledForm onSubmit={(e) => handleLogin(e, addToast)}>
          <CInputsMapper
            mapper={loginData}
            eventHandlers={handleInputChange}
            type="name"
          />
          <CButton type="submit">{translate("login.button")}</CButton>
        </StyledForm>
      </FormWrapper>
      <LinesAnimation />
    </LoginFormContainer>
  );
};

export default LoginForm;
