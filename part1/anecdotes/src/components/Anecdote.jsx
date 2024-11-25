import styled from "styled-components";

const Anecdote = ({ random, votes }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <Description>{random}</Description>
          <Votes>{`votes: ${votes}`}</Votes>
        </Card>
      </CardContainer>
    </>
  );
};

export default Anecdote;

/**
 *
 * STYLED COMPONENTS
 *
 **/
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  padding: 25px;
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Votes = styled.p`
  position: absolute;
  top: -22px;
  right: -10px;
  transform: rotate(10deg);
  background-color: #4caf50;
  color: #fff;
  font-size: 0.9rem;
  padding: 7px 13px;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;
