import { useSelector, useDispatch } from "react-redux";

// REDUX ACTIONS CREATORS
import { vote } from "./reducers/anecdoteReducer";
// CSS
import "./App.css";

/******************************************************************************/

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="root">
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div className="anecdote-card" key={anecdote.id}>
          <div className="anecdote-content">{anecdote.content}</div>
          <div className="anecdote-votes">
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
