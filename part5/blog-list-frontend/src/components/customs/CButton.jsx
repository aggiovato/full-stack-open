// STYLES
import { StyledButton } from "@styles/Customs.styles";

const CButton = ({
  children,
  onClick,
  btnType = "primary",
  shape = "standard",
  disabled = false,
  icon = null,
  ...props
}) => {
  return (
    <StyledButton
      $btnType={btnType}
      $shape={shape}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span style={{ marginRight: children ? "8px" : "0" }}>{icon}</span>
      )}
      {children}
    </StyledButton>
  );
};

export default CButton;
