import AnecdoteCard from "./AnecdoteCard";

const AnecdoteList = ({ anecdotes }) => {
  return (
    <>
      {anecdotes &&
        anecdotes.map((anecdote) => (
          <AnecdoteCard key={anecdote.id} anecdote={anecdote} />
        ))}
    </>
  );
};

export default AnecdoteList;
