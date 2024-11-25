import styled from "styled-components";

const Button = ({ onClick, text, variant }) => {
  return (
    <StyButton $variant={variant} onClick={onClick}>
      {text}
    </StyButton>
  );
};

export default Button;

/**
 *
 * STYLED COMPONENTS
 *
 **/
const StyButton = styled.button`
  background-color: ${(props) =>
    props.$variant === "green"
      ? "#4caf50"
      : props.$variant === "red"
      ? "#E53935"
      : "#9e9e9e"};
  color: #fff;
  font-size: 0.9rem;
  padding: 10px 15px;
  border-radius: 15px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "green"
        ? "#3E8E41"
        : props.$variant === "red"
        ? "#B71C1C"
        : "#757575"};

    transform: translateY(-0.5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
