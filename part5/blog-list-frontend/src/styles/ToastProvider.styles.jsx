import styled, { keyframes } from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 16px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 480px) {
    width: 200px;
    gap: 13px;
    top: 12px;
    right: 12px;
  }
`;

const ToastMessage = styled.div`
  background-color: ${({ type }) =>
    type === "success" ? "#2D8A4A" : "#D9534F"}; /* Verde oscuro para éxito */
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ type }) =>
      type === "success" ? "#256B3A" : "#C9302C"};
  }

  @media (max-width: 480px) {
    font-size: 12px;
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
  margin-right: 10px;
  margin-bottom: 2px;
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
