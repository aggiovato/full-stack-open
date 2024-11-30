import styled from "styled-components";

const Total = ({ parts }) => {
  const total_exercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );
  return (
    <FooterContainer>
      <FooterText>Total of {total_exercises} exercises</FooterText>
    </FooterContainer>
  );
};

export default Total;

/**
 *
 * Styled components
 *
 */

const FooterContainer = styled.div`
  background-color: #e2f1e7; /* Color de fondo invertido */
  color: #243642; /* Texto oscuro */
  padding: 10px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;
