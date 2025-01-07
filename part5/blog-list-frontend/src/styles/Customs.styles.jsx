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
  primary: "#1f7a8c",
  secondary: "#07536b",
  success: "#28a745",
  danger: "#c74343",
  muted: "#666",
};

export const StyledButton = styled.button`
  padding: 9px 16px;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  cursor: pointer;
  background-color: ${({ $btnType }) =>
    buttonColors[$btnType] || buttonColors.primary};
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
      border-radius: 8px;
    `}

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: ${buttonColors.muted};
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;

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
  top: 115%;
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
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.6) transparent;
  }
`;
