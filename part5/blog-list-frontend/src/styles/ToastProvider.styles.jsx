import styled from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 480px) {
    width: 230px;
    top: 20px;
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
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ type }) =>
      type === "success" ? "#256B3A" : "#C9302C"}; /* Hover más oscuro */
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CloseButton = styled.button`
  margin-left: 10px;
  background: transparent;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export { ToastContainer, ToastMessage, CloseButton };
