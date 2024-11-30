import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const Content = ({ parts }) => {
  return (
    <ContentContainer>
      {parts.map((part) => (
        <StyPart key={part.id}>
          <PartIcon />
          <PartText>{`${part.name} ${part.exercises}`}</PartText>
        </StyPart>
      ))}
    </ContentContainer>
  );
};

export default Content;

/**
 *
 * Styled components
 *
 */

const ContentContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const StyPart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PartIcon = styled(FaArrowRight)`
  margin-right: 10px;
  color: #243642;
`;

const PartText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #243642; /* Color de texto */
`;
