import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

/**
 *
 * Styled components
 *
 */

const variants = {
  primary: {
    base: "#444",
    hover: "#555",
    active: "#222",
  },
  secondary: {
    base: "#fff",
    hover: "#ddd",
    active: "#ccc",
  },
  danger: {
    base: "#8A2C34",
    hover: "#A8414E",
    active: "#702429",
  },
  success: {
    base: "#3A8A40",
    hover: "#4F9A50",
    active: "#2E6930",
  },
  warning: {
    base: "#B8732A",
    hover: "#D0893E",
    active: "#8F5A20",
  },
  info: {
    base: "#3A6D8C",
    hover: "#4B819F",
    active: "#2E4E68",
  },
};

export const DialogContainer = styled.dialog`
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
  }

  &:focus {
    outline: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @media (max-width: 768px) {
    width: 270px;
  }
`;

export const DialogTitle = styled.div`
  margin: 10px 0;
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DialogCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isLongDtails ? "column" : "row")};
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  padding: 20px 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DialogContent = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #444;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const DialogContentLine = styled.p`
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;

export const UserIcon = styled(FaUser)`
  flex-shrink: 0;
  align-self: center;
  width: 50px;
  height: 50px;
  color: #444;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyCloseIcon = styled(IoCloseOutline)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: rotate(10deg) scale(1.15);
  }
`;

export const DialogCloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  transform: translate(45%, -45%);
  border: none;
  border-radius: 100%;
  background-color: #444;
  font: inherit;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #222;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 0.9rem;
    padding: 10px 5px;
    margin-bottom: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
`;

export const Button = styled.button`
  padding: 8px 15px;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $variant = "primary" }) =>
    variants[$variant]?.base || variants.primary.base};
  color: #fff;
  font: inherit;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $variant = "primary" }) =>
      variants[$variant]?.hover || variants.primary.hover};
  }

  &:active {
    background-color: ${({ $variant = "primary" }) =>
      variants[$variant]?.active || variants.primary.active};
  }

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 0.9rem;
    padding: 10px 5px;
    margin-bottom: 10px;
  }
`;
