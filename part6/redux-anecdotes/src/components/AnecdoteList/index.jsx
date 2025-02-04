import { useSelector } from "react-redux";

import AnecdoteCard from "./AnecdoteCard";
import { AnecdoteContainer } from "./AnecdoteList.styles";

/******************************************************************************/

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.trim() === "") return state.anecdotes;
    return state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });

  return (
    <AnecdoteContainer>
      {anecdotes.length === 0 && <p>No anecdotes found</p>}
      {anecdotes.map((anecdote) => (
        <AnecdoteCard anecdote={anecdote} key={anecdote.id} />
      ))}
    </AnecdoteContainer>
  );
};

export default AnecdoteList;
