import { useState } from "react";
import Anecdote from "./components/Anecdote";
import Button from "./components/Button";

import { anecdotes } from "./utils/data";
import { randomize, getMostVotedKey } from "./utils/helpers";
import styled from "styled-components";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0, // The number of votes for each anecdote
  });

  const mostVotedKey = getMostVotedKey(votes);

  // Handle clicking Next anecdote button
  const handleNext = () => {
    let random;
    do {
      random = randomize(anecdotes.length);
    } while (random === selected);
    setSelected(random);
  };

  // Handle clicking the Vote button
  const handleVote = () => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selected]: prevVotes[selected] + 1,
    }));
  };

  return (
    <>
      <Header1>Anecdote of the day</Header1>

      <ButtonsContainer>
        <Button variant={"red"} onClick={handleVote} text="Vote" />
        <Button variant={"green"} onClick={handleNext} text="Next anecdote" />
      </ButtonsContainer>

      <Anecdote random={anecdotes[selected]} votes={votes[selected]} />

      {!(votes[mostVotedKey] === 0) && (
        <Anecdote
          random={anecdotes[mostVotedKey]}
          votes={votes[mostVotedKey]}
          isMostVoted
        />
      )}
    </>
  );
};

export default App;

/**
 *
 * STYLED COMPONENTS
 *
 */
const Header1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1.7rem;
  font-weight: bold;
  color: #333;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;
