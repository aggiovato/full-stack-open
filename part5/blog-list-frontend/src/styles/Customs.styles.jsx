import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #46b9c3;
  border-radius: 5px;
  font-family: inherit;
  font-size: 15px;
  background-color: #07536b;
  color: white;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #1f9da9;
    box-shadow: 0 0 5px rgba(31, 157, 169, 0.5);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #d5f8fd;
  margin-bottom: 8px;
  margin-left: 5px;
  display: block;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

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

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Tooltip = styled.div`
  position: absolute;
  ${({ $tt_position }) =>
    $tt_position === "top"
      ? `
    bottom: 115%;
  `
      : `
    top: 115%;
  `}
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  z-index: 10;
  max-width: 250px;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: "";
    position: absolute;
    ${({ $tt_position }) =>
      $tt_position === "top"
        ? `
      top: 100%;
      border-color: rgba(0, 0, 0, 0.6) transparent transparent transparent;
    `
        : `
      bottom: 100%;
      border-color: transparent transparent rgba(0, 0, 0, 0.6) transparent;
    `}
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
  }
`;
