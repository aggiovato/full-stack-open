import styled from "styled-components";

/**
 *
 * Styled components
 *
 */
export const StyMessage = styled.dialog`
  position: fixed;
  top: -80%;
  left: 80%;
  margin-right: 20px;
  padding: 12px 20px;
  background-color: ${({ $type }) =>
    $type === "success" ? "#3A8A40" : "#8A2C34"};
  color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  z-index: 1000;
  max-width: 90%;
  word-wrap: break-word;
  white-space: normal;
  animation: slideDown 0.3s ease-out;
  width: 18%;

  &::backdrop {
    background: none;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 600px) {
    top: -80%;
    width: 60%;
    right: 20px;
    transform: none;
  }
`;

export const StyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyCloseIcon = styled.button`
  margin: 0;
  padding: 0;
  padding-bottom: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: rotate(10deg) scale(1.15);
  }
`;
