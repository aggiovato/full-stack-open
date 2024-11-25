import styled from "styled-components";

const Anecdote = ({ random, votes, isMostVoted }) => {
  return (
    <>
      <CardContainer>
        {isMostVoted ? (
          <GoldenCard>
            <Title>Most voted anecdote</Title>
            <GoldenDescription>{random}</GoldenDescription>
            <GoldenVotes>{votes}</GoldenVotes>
          </GoldenCard>
        ) : (
          <Card>
            <Description>{random}</Description>
            <Votes>{`votes: ${votes}`}</Votes>
          </Card>
        )}
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

const GoldenCard = styled(Card)`
  margin-top: 25px;
  background-color: #fffbea;
  border: 2px solid #ffd700;
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.5);

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 3px solid rgba(255, 223, 0, 0.8);
    border-radius: 15px;
    z-index: -1;
  }

  &:hover {
    transform: none;
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.7);
  }
`;

const Title = styled.p`
  position: absolute;
  top: -70px;
  left: -10px;
  background-color: #d1b419;
  color: #fff;
  font-size: 0.9rem;
  padding: 10px 16px;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(255, 215, 0, 0.5);
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const GoldenDescription = styled(Description)`
  color: #b8860b;
  background-color: #fff5d7;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(255, 215, 0, 0.5);
  margin: 10px 0;
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

const GoldenVotes = styled(Votes)`
  top: -35px;
  right: -27px;
  transform: rotate(13deg);
  background-color: #d1b419;
  padding: 10px 16px;
  box-shadow: 0 2px 4px rgba(255, 215, 0, 0.5);
`;
