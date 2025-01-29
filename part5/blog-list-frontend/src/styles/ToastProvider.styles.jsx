import styled, { keyframes } from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  top: 13px;
  right: 16px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 440px;
  min-width: 300px;
  gap: 15px;

  @media (max-width: 480px) {
    width: 250px;
    min-width: 200px;
    gap: 13px;
    top: 15px;
    right: 15px;
  }
`;

const ToastMessage = styled.div`
  background-color: ${({ type }) =>
    type === "success" ? "#2D8A4A" : "#D9534F"};
  color: #fff;
  padding: 10px 20px 10px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  min-height: 55px;
  word-wrap: break-word;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ type }) =>
      type === "success" ? "#256B3A" : "#C9302C"};
  }

  @media (max-width: 480px) {
    padding: 10px 8px 10px 40px;
    font-size: 12px;
    margin-left: 18px;
    margin-right: 0px;
  }
`;

const closeButtonAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
    opacity: 1;
  }
  50% {
    transform: rotate(0deg);
    opacity: 0.4;
  }
  75% {
    transform: rotate(-15deg);
    opacity: 1;
  }
  100% {
    transform: rotate(0deg);
    opacity: 0.7;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  left: 15px;
  background: transparent;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    animation: ${closeButtonAnimation} 0.5s ease-in-out;
  }
`;

export { ToastContainer, ToastMessage, CloseButton };
