const Anecdote = ({ anecdote }) => {
  return (
    <>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>
        has {anecdote.votes} {anecdote.votes === 1 ? "vote" : "votes"}
      </p>
      <p>for more info see {anecdote.info}</p>
    </>
  );
};

export default Anecdote;
