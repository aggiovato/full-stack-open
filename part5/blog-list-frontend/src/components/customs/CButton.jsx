// STYLES
import styled, { css } from "styled-components";

/*********************************************************************************** */

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

/*********************************************************************************** */

const buttonColors = {
  primary: {
    main: "#1f7a8c",
    hover: "#154f5f",
    active: "#022b3a",
    border: "#1f9da9",
  },
  secondary: {
    main: "#07536b",
    hover: "#05415a",
    active: "#033a4e",
    border: "#0a657d",
  },
  success: {
    main: "#28a745",
    hover: "#218838",
    active: "#1e7e34",
    border: "#34ce57",
  },
  danger: {
    main: "#c74343",
    hover: "#a83232",
    active: "#521616",
    border: "#d95454",
  },
  muted: {
    main: "#666",
    hover: "#555",
    active: "#444",
    border: "#777",
  },
};

export const StyledButton = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ $btnType }) =>
    buttonColors[$btnType].main || buttonColors.primary.main};
  transition: all 0.3s ease;

  ${({ $shape }) =>
    $shape === "rounded" &&
    css`
      border-radius: 50px;
    `}

  ${({ $shape }) =>
    $shape === "square" &&
    css`
      border-radius: 0;
    `}

  ${({ $shape }) =>
    $shape === "icon" &&
    css`
      padding: 8px;
      border-radius: 50%;
      font-size: 0;
    `}

  ${({ $shape }) =>
    $shape === "standard" &&
    css`
      border-radius: 5px;
    `}

  &:hover {
    background-color: ${({ $btnType }) =>
      buttonColors[$btnType].hover || buttonColors.primary.hover};
  }

  &:active {
    transform: scale(0.95);
    background-color: ${({ $btnType }) =>
      buttonColors[$btnType].active || buttonColors.primary.active};
    border-color: ${({ $btnType }) =>
      buttonColors[$btnType].border || buttonColors.primary.border};
    box-shadow: 0 0 5px
      ${({ $btnType }) =>
        buttonColors[$btnType].border || buttonColors.primary.border};
  }

  &:disabled {
    background-color: ${buttonColors.muted.main};
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 15px;

    ${({ $shape }) =>
      $shape === "icon" &&
      css`
        padding: 6px;
        border-radius: 50%;
        font-size: 0;
      `}
  }
`;
