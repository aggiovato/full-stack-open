import { useSelector, useDispatch, shallowEqual } from "react-redux";
// REDUX ACTIONS CREATORS
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div className="anecdote-card" key={anecdote.id}>
          <div className="anecdote-content">{anecdote.content}</div>
          <div className="anecdote-votes">
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
