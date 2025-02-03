import { useSelector, shallowEqual } from "react-redux";

import AnecdoteCard from "./AnecdoteCard";
import { AnecdoteContainer } from "./AnecdoteList.styles";

/******************************************************************************/

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state, shallowEqual);

  return (
    <AnecdoteContainer>
      {anecdotes.map((anecdote) => (
        <AnecdoteCard anecdote={anecdote} key={anecdote.id} />
      ))}
    </AnecdoteContainer>
  );
};

export default AnecdoteList;
