import styled, { keyframes } from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100dvh;
  background-color: #022b3a;
  overflow: hidden;
  padding: 0 15px;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available; /* Safari mobile */
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 100px;
  }
`;

export const FormWrapper = styled.div`
  background-color: rgba(3, 58, 78, 0.9);
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  min-height: 300px;
  color: #e1e5f2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 25px 30px;
    margin-bottom: 30px;
  }
`;

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #d5f8fd;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Más espacio entre inputs */
`;

export const StyledButton = styled.button`
  padding: 12px;
  background-color: #1f7a8c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #154f5f;
  }

  &:active {
    background-color: #022b3a;
    border-color: #1f9da9;
    box-shadow: 0 0 5px rgba(31, 157, 169, 0.5);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const oscillate = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    opacity: 0.5;
    transform: translateY(60px);
  }
  50% {
    opacity: 1;
    transform: translateY(60px); 
  }
  75% {
    opacity: 0.5;
    transform: translateY(0); 
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const fadeInOut = keyframes`
  10%, 63% {
    opacity: 0;
  }
  25%, {
    opacity: 1;
  }
`;

export const StyledDecoration = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;

  @media (min-width: 481px) {
    display: none;
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: 13px;
  }

  .bar-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .line {
      width: 80px;
      height: 5px;
      background-color: ${({ color }) => color || "#1f7a8c"};
      border-radius: 3px;
    }

    .text {
      position: absolute;
      top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #e1e5f2;
      opacity: 0;
    }
  }

  .animated .line {
    animation: ${oscillate} 5s ease-in-out 1;
  }

  .animated .text {
    animation: ${fadeInOut} 5s ease-in-out 1;
  }

  .bar-container:nth-child(1) .line {
    width: 80px;
    background-color: #1f7a8c;
    animation-delay: 0s;
  }

  .bar-container:nth-child(1) .text {
    color: #d5f8fd;
    animation-delay: 0s;
  }

  .bar-container:nth-child(2) .line {
    width: 120px;
    background-color: #46b9c3;
    animation-delay: 0.5s;
  }

  .bar-container:nth-child(2) .text {
    color: #ffffff;
    animation-delay: 0.5s;
  }

  .bar-container:nth-child(3) .line {
    width: 75px;
    background-color: #d5f8fd;
    animation-delay: 1s;
  }

  .bar-container:nth-child(3) .text {
    color: #1f7a8c;
    animation-delay: 1s;
  }
`;
