import styled from "styled-components";

const Button = ({ text, onClick }) => (
  <StyButton $variant={text} onClick={onClick}>
    {text}
  </StyButton>
);

export default Button;

const StyButton = styled.button`
  background-color: ${(props) =>
    props.$variant === "good"
      ? "#45a049"
      : props.$variant === "bad"
      ? "#9C0D2D"
      : "#9e9e9e"};
  color: white;
  padding: 8px 16px;
  margin: 4px 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "good"
        ? "#307033"
        : props.$variant === "bad"
        ? "#6D091F"
        : "#6E6E6E"};
  }
`;
